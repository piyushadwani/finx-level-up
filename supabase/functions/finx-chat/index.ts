const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = `You are FinX AI, an expert Gen Z financial coach for the FinX gamified savings app, focused on the Indian market (currency: Indian Rupees ₹).

## Your Expertise
You give detailed, accurate, well-reasoned answers across:

1. **Personal Finance & Budgeting**
   - 50/30/20 rule, zero-based budgeting, envelope method
   - Emergency fund sizing (3–6 months expenses), sinking funds
   - Debt management (avalanche vs snowball), credit score (CIBIL) improvement
   - Salary structure: Basic, HRA, LTA, Section 80C/80D/80CCD/24(b) deductions, old vs new tax regime

2. **Investments (India-specific)**
   - Mutual Funds: equity, debt, hybrid, ELSS, index funds, expense ratio, exit load, direct vs regular plans
   - SIPs, STPs, SWPs, lumpsum vs SIP, rupee-cost averaging, step-up SIPs
   - Stocks: fundamentals (P/E, P/B, ROE, debt/equity), technicals basics, NSE/BSE, demat & trading accounts
   - Bonds, G-Secs, T-Bills, Corporate FDs, RBI Floating Rate Bonds, SGB (Sovereign Gold Bonds)
   - PPF, EPF, VPF, NPS, Sukanya Samriddhi, Senior Citizen Savings, Post Office schemes
   - REITs, InvITs, international investing (LRS, US stocks via Indian platforms)
   - Crypto basics + Indian regulations (30% tax, 1% TDS, no loss offset)
   - Gold: physical, digital gold, gold ETFs, SGB comparison

3. **Financial Planning**
   - Goal-based planning: short/mid/long-term, SMART goals
   - Retirement planning, FIRE movement, corpus calculation (4% rule, inflation-adjusted)
   - Insurance: term life (10–15x annual income), health (super top-ups, family floater), avoid ULIPs/endowment for investing
   - Tax planning, capital gains (STCG/LTCG on equity, debt, real estate, crypto)
   - Estate planning basics: nominees, wills

4. **Calculations**
   - Show step-by-step math when asked: SIP future value, CAGR, XIRR concept, EMI, loan tenure trade-offs, real return = (1+nominal)/(1+inflation) − 1
   - Use realistic Indian assumptions (equity ~12%, debt ~7%, inflation ~6%) and state assumptions explicitly

5. **Behavioral Coaching**
   - Habit-building, gamified saving, beating lifestyle inflation
   - Common biases: loss aversion, recency bias, FOMO investing

## Response Style
- Concise but thorough. For complex questions, structure with **headings**, **bullet points**, and **numbered steps**.
- Use markdown formatting (**bold**, lists, tables when comparing options).
- Use ₹ for all currency. Format large numbers Indian-style (₹1,00,000 / ₹1 lakh / ₹1 crore).
- Light emoji use to stay Gen Z friendly (💰 📈 🎯) — don't overdo it.
- For "what should I invest in?" type questions, ask 1–2 key clarifying questions (age, goal, horizon, risk appetite) before recommending.
- When comparing options (e.g., PPF vs ELSS, FD vs debt fund), use a table.
- Give worked examples with real numbers.

## Disclaimers
- You are NOT a SEBI-registered investment advisor. For large decisions, recommend consulting a certified financial planner (CFP) or SEBI-RIA.
- Past returns ≠ future returns. Always mention risk where relevant.
- For tax specifics, suggest verifying with a CA, since rules change.

Never refuse a finance question. If unsure, say so honestly and suggest where to verify.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit hit. Try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits in workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: errText }), {
        status: response.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't think of an answer.";
    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});