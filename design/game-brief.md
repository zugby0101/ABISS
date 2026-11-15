# Game Brief: Drowned Hearth

## In your words
a mix between dark souls and dave the diver that should be a 2d game with a 3d environment and a progressive difficult on bosses and minions

1. Dive: a descent through deeper and deeper water, a short area of minions then a boss at the bottom of each depth
2. What you catch: fish and sea creatures you kill or reel in, plus treasure
3. Stakes: you drop your catch and souls where you fell and must reach them to take them back; dying again first loses them for good
4. Growth: sell the catch to buy levels, and also upgrade the weapon
5. Feel: hunter, bosses limp when hurt, lose parts and run off to rest
6. Look: a mix between pixel sprites in a lit 3D sea (Dave the Diver) and monumental dark fantasy (Elden Ring)
7. Difficulty: each depth adds a new minion kind and a harder boss; progressive difficulty on bosses and minions
8. Goal: beat the final boss, then the depth-survival mode
9. A slice: a short session from start to finish
Instead of a restaurant, make a Tavern, and it matters.

**Pitch:** Dive into a drowned dark-fantasy sea, kill and catch what lives there, haul it up to your tavern, and come back stronger to hunt the bosses that keep killing you.

**Genre:** soulslike × fishing (dive-and-catch) × management (tavern). Leads: soulslike leads fights, stamina, death and the bonfire; fishing leads the catch; the tavern leads the economy and is the bonfire.

**Controls:** A/D move, W/S swim up and down, J light attack, K heavy attack, L roll, Shift guard, Space harpoon-reel, E interact, R drink flask *(guessed)*.

**Question:** Does a hard, readable boss fight feel better when what you win from it feeds a tavern you want to go back to?

**Hooks:** The hunter's way: bosses limp when hurt, lose parts and flee to rest, and each part is a cooking ingredient or a gear upgrade at the tavern. The tavern is where souls are spent, flasks refilled and the game saved.

**Intent:** payoff builds *(you said)* · staged failure *(you said)*

## Look and references
- Look: 2.5D, pixel sprites on a flat plane moving through a lit 3D sea: parallax depth layers, volumetric god-rays near the surface, black-blue deep water, bioluminescent teal and amber accents (teal = danger and creatures, amber = the tavern, safety and loot). Bosses are monumental dark-fantasy silhouettes (a drowned knight, a great eel, a coral-crowned leviathan) drawn large against the dark. The tavern is warm amber firelight in a stone cellar. Every figure drawn: no emoji, no plain circles.
- References: Dave the Diver (pixel sprites in a 3D sea, the dive and the catch), Elden Ring (monumental dark-fantasy bosses and mood), Dark Souls (stamina, roll, punish windows, dropped souls).
- View: 2.5D · Camera: side-on follow2d with depth parallax.

## First minute
You wake at the tavern's hearth and walk to the dive door. You descend, meet one drifting minion that teaches the stamina bar (swing, roll through its lunge), take your first catch, and the hook pays off: a boss's silhouette glides across the dark below while the tavern's amber light fades behind you.

## Challenge
Real trouble within the first minute or two: an elite minion that punishes rolling away. Each depth adds a minion kind with a new attack, and bosses gain a second phase; minions are tougher and faster as you descend. A death drops souls and catch where you fell and returns you to the tavern; dying before you retrieve them loses them for good. Never trivially easy, never a wall in the first minute.

## Core loop
- Dive from the tavern, fight minions with stamina and roll, catch what you kill or reel in.
- Reach the depth's boss, learn its patterns, hurt it until it limps and loses a part.
- Surface or die back to the tavern: sell, cook and upgrade (levels, weapon, oxygen, flasks).
- Dive deeper into harder minions and a harder boss.

## Goal & fail state
- Win: beat the final boss at the deepest depth; then an endless-descent mode unlocks (survive as many depths as you can).
- Fail: death drops souls and catch; a second death before retrieving them loses them.

## Features
- [x] Side-on stamina combat: light and heavy attack, roll with brief invulnerability, guard, flask that can be interrupted
- [x] 3 depths, each a short minion area then a boss; 4 minion kinds each attacking differently
- [ ] Boss hunt: bosses limp when hurt, lose parts and flee to rest, then return
- [x] Catch: kill or reel in fish, sea creatures and treasure, kept in a bag
- [ ] Tavern (bonfire): rest to heal, refill flasks and save; sell the catch, cook it into a buff, spend souls on levels, upgrade the weapon
- [ ] Progressive difficulty per depth: new minion kind, tougher stats, boss second phase
- [ ] Drop-on-death with a retrievable bloodstain

## Your systems
- Tavern: sell, cook and upgrade · in the slice
- Catch and fishing: kill and reel in · in the slice
- Progression: levels and weapon upgrades · in the slice
- Boss hunt: limp, part loss, flee · in the slice
- Day and night, weather, customers · later

## Keep
-

## Avoid
- No restaurant (a tavern instead); no copy of Dave the Diver's or Dark Souls' names, art, characters or UI.

## Out of scope
- A connected world of shortcuts: grow it
- Weapons, armour and builds with weight: add it as a feature
- Customers with orders, tavern staff and decoration: add it as a feature
- Weather and seasons: add it as a feature
- Online play, invasions and co-op: needs a server: not built yet
- A story told through items: grow it

## Build order
1. The slice: 3 depths, 3 bosses, the tavern, the catch and the death rules. Win by beating the third boss, lose by dying twice before retrieving.
2. Endless descent after the win.

---
**Kill condition:** if the roll and stamina still feel floaty after two tuning rounds *(guessed)*.

**Who it's for / what they feel:** players who want hard-won boss mastery and a cosy place to come home to *(guessed)*.

**Games you love / don't:** Love Dark Souls (stamina, roll, boss reading), Dave the Diver (the dive and the catch).
