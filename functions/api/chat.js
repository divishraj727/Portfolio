// Cloudflare Pages Function — POST /api/chat
// Powers the portfolio AI assistant. Uses Groq (free, OpenAI-compatible, Llama 3.3)
// by default; set GROQ_API_KEY in your Cloudflare Pages project env vars.
// Optionally set OPENAI_API_KEY to use OpenAI instead.

const PERSONA = `You are the friendly AI assistant on Divish Raj O's portfolio website.
Answer questions about Divish concisely (2-4 sentences), in first-person-as-assistant ("Divish has…").
Only discuss Divish, his work, skills, and availability. If asked something off-topic, politely
steer back to Divish or suggest emailing him. Never invent facts beyond what's below.

FACTS ABOUT DIVISH RAJ O:
- Full Stack Developer based in Bangalore, India. 2+ years experience. Available for projects and full-time roles.
- Contact: divishraj05@gmail.com | GitHub github.com/divishrajo | LinkedIn linkedin.com/in/divish-raj-o-664a1519a
- Stack: React, Next.js, JavaScript, Python, Django, Django REST Framework, Node.js.
- Cloud/DevOps: AWS (EC2, S3, RDS, VPC, IAM, Lambda, API Gateway), Docker, Kubernetes, Ansible, CI/CD, Linux. RHCE + CISCO CCNA certified.
- Databases: PostgreSQL, MySQL, SQLite.
- Experience: Full Stack Developer at Sanadi Technologies (Jan 2025–present, built a modular ERP on Django+React deployed on AWS/K8s, 99.9% uptime); Graduate Trainee Engineer at Vodafone VOIS (2023–2024); Developer Intern at Hiringhood.
- Education: M.Tech Computer Networks, RVCE Bangalore (CGPA 8.60); B.Tech CSE, JNNCE Shimoga (CGPA 8.06).
- Live projects: EduFlow (AI LMS powered by Llama 3.3, 1000+ students), ResumeAI (AI résumé optimiser + auto job applier), Nakshatra Events (event-planning site), Peace Haven (task manager with auth).`;

export async function onRequestPost({ request, env }) {
  try {
    const { messages } = await request.json();
    if (!Array.isArray(messages)) {
      return json({ error: "messages array required" }, 400);
    }

    // Keep the last 10 turns to bound token usage.
    const trimmed = messages.slice(-10).map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: String(m.content || "").slice(0, 2000),
    }));

    const useOpenAI = !!env.OPENAI_API_KEY;
    const endpoint = useOpenAI
      ? "https://api.openai.com/v1/chat/completions"
      : "https://api.groq.com/openai/v1/chat/completions";
    const apiKey = useOpenAI ? env.OPENAI_API_KEY : env.GROQ_API_KEY;
    const model = useOpenAI ? "gpt-4o-mini" : "llama-3.3-70b-versatile";

    if (!apiKey) {
      return json({ error: "No API key configured (set GROQ_API_KEY)." }, 500);
    }

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 300,
        messages: [{ role: "system", content: PERSONA }, ...trimmed],
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text();
      return json({ error: "Upstream error", detail: detail.slice(0, 300) }, 502);
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry, no reply.";
    return json({ reply });
  } catch (err) {
    return json({ error: "Server error", detail: String(err).slice(0, 200) }, 500);
  }
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
