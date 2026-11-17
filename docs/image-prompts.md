# AI image and video prompts (kie.ai)

Use the same style note in every prompt so the images look like one set. Generate at 16:9 (or 1792x768 if the tool offers a wide crop).
Save each file in `packages/ui/public/images/` with the exact name shown and push. A page shows its image only once the file exists.

**Style note (add to the end of every prompt):**
> Realistic documentary photography, warm natural daylight, shallow depth of field, candid and unposed. Adults in their early twenties only.
> No text, no logos, no flags, no recognisable landmarks or real buildings. No close-up faces; show people at medium or wide distance.

## 1. Hero video: `public/hero.mp4` (5 to 8 seconds, no audio, loops)
> A small group of young Black African university students in their early twenties arrive on a leafy UK university campus with suitcases and
> backpacks, smiling and looking around with excitement. Smooth cut to a bright lecture room where the same students take notes and smile at
> a lecturer. Handheld documentary feel, gentle camera movement, seamless loop.

## 2. How it works: `public/images/how-it-works.jpg`
> Three or four young Black African students walking along a campus path in autumn light, pulling suitcases and carrying backpacks,
> laughing together, seen from a medium-wide distance with red-brick university buildings softly blurred behind them.

## 3. Eligibility: `public/images/eligibility.jpg`
> A final-year Ghanaian university student at a library desk with a laptop and a neat folder of documents, concentrating and slightly smiling,
> seen from the side at a medium distance, warm light from a window, shelves of books behind.

## 4. Safeguards: `public/images/safeguards.jpg`
> A programme team member and a young student sitting together in a bright, comfortable common room with tea on the table, talking easily,
> seen from behind or in profile at a medium distance, plants and soft furnishings around them, a calm and reassuring mood.

## 5. Universities: `public/images/universities.jpg`
> A UK university seminar room with a lecturer at a whiteboard and a mixed group of young students taking notes and engaging,
> shot from the back of the room at a wide distance, natural light from tall windows.

## Using them honestly
While images and video are AI-generated, the site labels them "Illustrative AI-generated". Replace them with real photos from the programme as soon
as you have them, and then remove the label in `components/PageImage.tsx` and `components/HeroVideo.tsx`.
Keep your kie.ai API key out of the repository.
