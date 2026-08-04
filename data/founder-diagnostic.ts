// Generated from TrungOPS/context/website/output/founder-diagnostic.json
// Source of truth: napcae/TrungOPS -- regenerate there, then sync here.

export const founderDiagnosticMeta = {
  title: "Founder Bottleneck Diagnostic | Trung Nguyen",
  description:
    "A 90-minute diagnostic to find your startup's real bottleneck. For founders with teams or founders who just raised. One session. One answer.",
}

export const hero = {
  headline: "You already know you're good. You just don't know what you're about to scale by mistake.",
  subheadline:
    "I run 90-minute Founder Bottleneck Diagnostics for founders who are already running a tight operation and want an outside read before they scale further. One session. The blind spot every operator carries -- named by someone who's seen it in ten other companies before yours.",
}

export const recognition = [
  {
    id: "combined",
    headline: "Everything's working. That's exactly when the blind spot gets expensive.",
    body: [
      "You've built something real -- a team and a system that runs without you micromanaging it, or a working theory of who it's for that's producing results right now.",
      "Either way, this is the check a sharp operator runs before compounding a decision: whatever's underneath the system gets bigger when you scale it, and a mismatch nobody's caught yet doesn't fix itself by moving faster.",
    ],
  },
]

export const mechanism = {
  framing:
    "Most founders who've done this say the same thing after: \"I already knew it -- I just hadn't said it out loud.\" That's the point. The diagnostic doesn't give you new information. It names the thing you already felt -- clearly enough that you can stop doing the expensive thing and start doing the right thing.",
}

// Testimonials: only namePublic=true entries get full attribution.
// Source: TrungOPS/context/website/output/testimonials.json
export const testimonials = [
  {
    id: "burden-william",
    quote:
      "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
    attribution: "Founder, early-stage public speaking platform",
  },
  {
    id: "nguyen-hien",
    quote:
      "I immediately sat down and decoded the whole thing and I know exactly what I need to do next.",
    attribution: "Founder, productivity tool",
  },
]

export const process = {
  sectionHeadline: "How the 90 minutes runs",
  before:
    "A short intake. You send me where things actually stand: team, traction, and the one thing you want a second, sharper read on. No deck, no prep theatre -- fifteen minutes of honesty.",
  during:
    "Ninety minutes, live, just us. I ask, you answer, and we follow the thread to the real constraint -- not the one you walked in assuming it was.",
  after: {
    intro: "You walk out with a clear answer -- one you can act on the same week:",
    deliverables: [
      "The actual bottleneck named -- not the surface complaint, the structural cause",
      "1-3 real priorities replacing current noise",
      "A clearer decision structure for the next 30-60 days",
      "Less expensive drift",
    ],
  },
}

export const about = {
  whoFor:
    "It's built for founders who are already running things well and want a peer's read before they scale a decision they can't fully audit themselves -- the way a sharp operator checks work with another sharp operator. Not for people looking for reassurance. For people who go looking for the uncomfortable part, because growth happens by expanding past the blind spot.",
  pattern:
    "25+ early-stage founders. B2B SaaS, hardware, marketplace, agency. The surface complaints differ. The structural causes repeat.",
  math: "The real cost of a wrong bottleneck is the weeks spent pushing a direction that doesn't compound. Against that, one session is small -- but only if the problem is felt as expensive, not just true. You can postpone the decision. You can't postpone what the current system keeps costing you.",
  frame:
    "Not coaching. Not ongoing advisory. One diagnostic -- and what comes next is a separate conversation.",
}

export const cta = {
  headline: "One session. 90 minutes. You leave knowing what to stop.",
  body:
    "Tell me what's actually stuck -- a few lines on where things stand. No deck, no prep theatre. I read every one personally. If it's a fit, I'll reply within 2 business days with a next step -- sometimes a short call, sometimes a direct booking for the 90-minute session, sometimes an honest \"not a fit.\"",
  // Airtable Form embed URL (https://airtable.com/embed/...). While empty, the page
  // shows the LinkedIn fallback CTA below. Paste the Website Inquiries form's share
  // URL to switch the front door to the intake form (LinkedIn drops to secondary).
  // Spec: TrungOPS/context/website/intake-buildspec.md §4.
  embedUrl: "",
  secondary: {
    text: "Already connected on LinkedIn? Message me \"diagnostic\" there instead.",
    url: "https://www.linkedin.com/in/ctn1991/",
  },
  // Fallback CTA while embedUrl is empty (keeps the current LinkedIn front door).
  buttonText: "Start on LinkedIn",
  buttonUrl: "https://www.linkedin.com/in/ctn1991/",
}

export const videoEmbed = {
  src: "https://drive.google.com/file/d/1mL-B-J7oM02KQY50toAuIJYZicDsnrpv/preview",
  allow: "autoplay",
}

// Teardown -- on-page visual ("anatomy of a diagnosis"). One real case, rendered
// as a walk-through. Data-driven so the case can be swapped by editing this object.
export const teardown = {
  sectionHeadline: "What finding the bottleneck actually looks like",
  attribution: "Founder, early-stage public speaking platform",
  surfaceComplaint: "My marketing is slow. I need to post more.",
  theQuestion: "How many people land on your page each month?",
  theAnswer: "I don't know.",
  reveal: [
    "50,000 visitors a month",
    "A quarter clicking the call to action",
    "Most of them creating an account",
  ],
  realBottleneck: "The funnel worked. He'd built the tracking and never opened it.",
  loop: ["Name a problem", "Attack it", "Nothing moves", "Push harder"],
  quote:
    "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
}

// Case studies. Only entries cleared in TrungOPS/output/testimonials.json carry a
// real name; all others are role/stage only (namePublic=false -> attribution only).
// Order: fast proof first, durable proof second -- TrungOPS/offers/diagnostic.md's
// two-proof doctrine ("lead with the fast proof; add the durable proof when the
// prospect asks 'but will it stick?'").
export const caseStudies = [
  {
    id: "tran-minh-algomate",
    quote:
      "Your question-asking approach helped me save 10 to 15 hours of nonsense outreach.",
    attribution: "Minh, Algomate",
    problem: "Came in sure his execution was the problem.",
    root: "The root wasn't the ICP -- it was a decision about who to become that he'd been avoiding making at all.",
    outcome: "A simple daily outreach routine he actually runs.",
    caseStudySlug: "algomate-10-hours-a-week",
  },
  {
    id: "burden-william",
    quote:
      "It's like going to the doctor to get a scan you've never had before and you find out problems you didn't know you had.",
    attribution: "Founder, early-stage public speaking platform",
    problem: "\"Marketing is slow -- I need to post more.\"",
    root: "He never read the funnel data he already had.",
    outcome: "Result landed months later -- durability, not a quick high.",
    caseStudySlug: "the-dashboard-he-never-opened",
  },
  {
    id: "nguyen-hien",
    quote:
      "I immediately sat down and decoded the whole thing and I know exactly what I need to do next.",
    attribution: "Founder, productivity tool",
    problem: "Unclear product direction.",
    root: "A volume problem, not a product problem.",
    outcome: "Same-session action -- knew the next move that day.",
  },
  {
    id: "harris-johny",
    quote:
      "You already know something, but it hits when someone says it to you straight. Sometimes you just need to take your medicine.",
    attribution: "Johny Harris, Dai Viet Rugby",
    problem: "Avoided selling for a year to protect community trust.",
    root: "Selling means sustainability -- otherwise the mission doesn't exist.",
    outcome: "Published the three insights himself, unprompted.",
  },
]
