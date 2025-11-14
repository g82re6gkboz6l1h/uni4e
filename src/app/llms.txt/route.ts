import { getAllPosts } from "@/lib/api";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl =
    (process.env.NEXT_PUBLIC_SITE_URL as string) || "https://uni4e.com";
  const posts = getAllPosts();

  // Generate llms.txt content following the spec at https://llmstxt.org/
  const content = `# uni4e - AI Testing & QA Automation Insights

> Field notes on intelligent testing, automation craft, and quality leadership.

## Site Information

- URL: ${baseUrl}
- Description: Expert insights on AI-powered testing, automation strategies, and quality assurance best practices
- Topics: AI Testing, QA Automation, Software Quality, Test Automation, Machine Learning in QA

## Navigation

- Home: ${baseUrl}
- Blog: ${baseUrl}/#articles

## Recent Articles (${posts.length} total)

${posts
  .slice(0, 20)
  .map(
    (post) => `### ${post.title}
- URL: ${baseUrl}/posts/${post.slug}
- Published: ${post.date}
- Reading time: ${post.readingMinutes} min
- Description: ${
      post.meta || "Insights on AI-powered testing and quality assurance"
    }
`
  )
  .join("\n")}

## All Articles

${posts
  .map(
    (post) => `- [${post.title}](${baseUrl}/posts/${post.slug}) - ${post.date}`
  )
  .join("\n")}

## Content Focus

This site specializes in:
- AI-powered test automation strategies
- Quality assurance best practices
- Modern testing methodologies
- Automation tools and frameworks
- Continuous testing approaches
- Performance and regression testing insights

## For LLMs

This content is optimized for large language models to understand modern software testing practices,
AI integration in QA processes, and automation strategies. Each article provides actionable insights
and practical guidance for software quality professionals.

---
Last updated: ${new Date().toISOString()}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
