module.exports = {

"[project]/.next-internal/server/app/api/posts/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/posts/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const allPosts = [
    // Page 1
    {
        id: 1,
        slug: "why-roas-is-lying",
        title: "Why ROAS is Lying to Your P&L (And What to Track Instead)",
        publishedAt: new Date("2024-12-15T10:00:00Z").toISOString(),
        readTime: 5,
        summary: "After auditing 50+ MENA e-commerce accounts this year, I've seen the same pattern: brands celebrating 4x ROAS while their profit margins shrink. Here's why traditional metrics are broken and what actually matters...",
        category: "Metrics & Analytics"
    },
    {
        id: 2,
        slug: "mena-attribution-crisis",
        title: "The MENA E-commerce Attribution Crisis (And How AI Can Fix It)",
        publishedAt: new Date("2024-12-10T11:30:00Z").toISOString(),
        readTime: 8,
        summary: "iOS updates, cookie deprecation, and regional privacy laws are creating a perfect storm for attribution in MENA markets. But there's a way forward using AI-powered modeling...",
        category: "Strategy"
    },
    {
        id: 3,
        slug: "black-friday-2024-recap",
        title: "Black Friday 2024: What Worked (And What Didn't) in GCC Markets",
        publishedAt: new Date("2024-12-05T09:00:00Z").toISOString(),
        readTime: 6,
        summary: "I analyzed performance data from 12 GCC brands during Black Friday 2024. The results were surprising - traditional strategies failed while these 3 approaches dominated...",
        category: "Case Study"
    },
    {
        id: 4,
        slug: "building-a-poas-dashboard",
        title: "Building a POAS Dashboard That Actually Drives Decisions",
        publishedAt: new Date("2024-11-28T14:00:00Z").toISOString(),
        readTime: 10,
        summary: "Most performance dashboards are vanity metric museums. Here's how to build a POAS-focused dashboard that connects directly to your P&L and drives real business decisions...",
        category: "Metrics & Analytics"
    },
    {
        id: 5,
        slug: "pmax-black-box",
        title: "Cracking the PMax Black Box: A Guide for E-commerce Brands",
        publishedAt: new Date("2024-11-20T16:00:00Z").toISOString(),
        readTime: 7,
        summary: "Google's Performance Max is powerful but opaque. This guide provides actionable strategies to gain more control and transparency over your PMax campaigns.",
        category: "Google Ads"
    },
    {
        id: 6,
        slug: "creative-velocity",
        title: "The Importance of Creative Velocity in a Post-Cookie World",
        publishedAt: new Date("2024-11-15T10:00:00Z").toISOString(),
        readTime: 5,
        summary: "As targeting signals weaken, creative becomes the most important lever for performance. Learn how to build a system for high-velocity creative testing and iteration.",
        category: "Strategy"
    }
];
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = Number.parseInt(searchParams.get("page") || "1", 10);
    const limit = Number.parseInt(searchParams.get("limit") || "6", 10);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = allPosts.slice(startIndex, endIndex);
    const hasMore = endIndex < allPosts.length;
    // Simulate network delay
    await new Promise((resolve)=>setTimeout(resolve, 500));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        posts: results,
        hasMore
    });
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__822dc8b3._.js.map