# Skills Display Toggle Guide

Your portfolio now has **two ways** to display skills:

## 🎯 Quick Switch

Open `src/config/features.ts` and change:

```typescript
SKILLS_DISPLAY: 'grid'  // For interactive grid (NEW)
// OR
SKILLS_DISPLAY: 'spline'  // For 3D Spline keyboard (ORIGINAL)
```

---

## ✨ Option 1: Interactive Grid (Currently Active)

**What it is:**
- Modern, interactive skill grid
- Beautiful hover effects and animations
- Click or hover to see skill details
- Works perfectly on mobile and desktop
- No need to modify Spline files!

**Features:**
- ✅ All 28 AI/ML skills included
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Dark/Light mode support
- ✅ Click to lock selection
- ✅ Hover for quick preview

**Customization:**
All skills are defined in `src/data/constants.ts` - just edit the SKILLS object!

---

## 🎮 Option 2: 3D Spline Keyboard (Original)

**What it is:**
- 3D interactive keyboard model
- Spline-powered animations
- Complex scroll-based interactions
- Requires Spline model editing

**To use this:**
1. Set `SKILLS_DISPLAY: 'spline'` in `src/config/features.ts`
2. Edit `public/assets/skills-keyboard.spline` in Spline
3. Name each keycap with skill names from SKILLS_REFERENCE.md

**Requirements:**
- Spline account (free at spline.design)
- Manual keyboard editing
- Knowledge of Spline interface

---

## 🚀 Current Setup

**Active Display:** Grid View ✅

**Why?** 
- Easy to customize without Spline
- Better mobile experience
- Faster loading time
- All skills already configured

---

## 📝 Adding/Removing Skills

1. Edit `src/data/constants.ts`
2. Add to `SkillNames` enum:
   ```typescript
   MYSKILL = "myskill",
   ```
3. Add to `SKILLS` object:
   ```typescript
   [SkillNames.MYSKILL]: {
     id: 29,
     name: "myskill",
     label: "My Skill",
     shortDescription: "Description here!",
     color: "#hexcolor",
     icon: "url-to-icon",
   },
   ```

The grid will automatically update! ✨

---

## 🎨 Styling

Grid styles are in `src/components/sections/skills-grid.tsx`

Customize:
- Grid columns: `grid-cols-4 md:grid-cols-7`
- Card size: `aspect-square`
- Animations: `framer-motion` props
- Colors: Tailwind classes

---

## 💡 Tips

1. **For quick edits:** Use Grid view
2. **For 3D effects:** Use Spline keyboard (requires model editing)
3. **Mix both:** Keep both, switch based on your preference
4. **Performance:** Grid loads faster

---

## 🐛 Troubleshooting

**Grid not showing?**
- Check `FEATURES.SKILLS_DISPLAY` is set to `'grid'`
- Ensure all skills have valid icon URLs
- Check browser console for errors

**Want to go back to Spline?**
- Change `SKILLS_DISPLAY: 'spline'` in features.ts
- Update Spline keyboard with new skill names

---

## 📞 Need Help?

Check:
- `SKILLS_REFERENCE.md` - All skill names and icons
- `src/config/features.ts` - Feature toggles
- `src/data/constants.ts` - Skill definitions
