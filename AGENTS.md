<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Academic portfolio architecture
- Use TanStack Start file routes for the six portfolio pages; the framework-provided router preserves SSR and typed navigation.
- Keep editable fictional portfolio content in typed src/data modules so content changes do not require presentation edits.
- Keep shared navigation, footer, reveal motion, and newsletter presentation in src/components/academic/shared.tsx to ensure consistency across pages.
- Validate demonstration contact submissions with the shared Zod schema; forms do not send or persist data until explicitly integrated.
- Route metadata uses src/data/seo.ts with unique per-page title and description; only the home route declares Person structured data.
