# Hero background video

The home page hero plays an optional looping video. Add these files to `packages/ui/public/`:

| File | Notes |
| --- | --- |
| `hero.mp4` | Required for the video to show. H.264, 1920x1080, 5-8 seconds, no audio, ideally under 4 MB. |
| `hero.webm` | Optional smaller version for modern browsers. |
| `hero-poster.jpg` | Optional still shown while the video loads. |

If `hero.mp4` is missing, or a visitor has "reduce motion" switched on, the hero shows the plain navy background.

While the footage is AI-generated, the page shows a small "Illustrative AI-generated footage" label. Remove the label in
`components/HeroVideo.tsx` only when it is replaced with real footage of the programme.

## Suggested generation prompt

> Warm natural daylight, cinematic and realistic. A small group of young Black African university students in their early twenties arrive
> on a leafy UK university campus with suitcases and backpacks, laughing and looking around with excitement. Smooth cut to a bright lecture
> room where the same students take notes and smile at a lecturer. Handheld documentary feel, shallow depth of field, gentle camera movement.
> No text, no logos, no flags, no recognisable buildings. Seamless loop, 16:9.

Create it with 16:9 aspect ratio and the shortest duration your plan allows. Keep your kie.ai API key out of the repository.
