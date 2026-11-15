// PROTOTYPE - NOT FOR PRODUCTION
// Question: Does a hard, readable boss fight feel better when what you win from it feeds a tavern you want to go back to?
// Date: 2026-11-15
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = (function () {
const v = (value, min, max, step) => ({ value, min, max, step });
return {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: v(0.5, 0, 1, 0.05),

  // ---- the diver (seconds, pixels, pixels per second) ----
  hp: v(100, 40, 300, 5),                // starting health
  stamina: v(100, 40, 300, 5),           // starting stamina
  stam_regen: v(38, 10, 120, 1),         // stamina per second once the pause is over
  stam_delay: v(0.55, 0, 2, 0.05),       // seconds after spending stamina before it refills
  move_speed: v(235, 100, 500, 5),       // horizontal swim speed
  swim_speed: v(205, 80, 400, 5),        // vertical swim speed
  light_cost: v(14, 0, 60, 1),           // stamina, light swing
  heavy_cost: v(30, 0, 80, 1),           // stamina, heavy swing
  roll_cost: v(20, 0, 60, 1),            // stamina, roll
  light_dmg: v(12, 2, 60, 1),
  heavy_dmg: v(30, 5, 120, 1),
  light_time: v(0.34, 0.15, 0.8, 0.01),  // seconds, whole swing
  heavy_time: v(0.78, 0.3, 1.5, 0.01),
  light_range: v(82, 40, 160, 2),        // pixels in front of the diver
  heavy_range: v(108, 50, 200, 2),
  roll_time: v(0.42, 0.2, 0.8, 0.01),
  roll_iframes: v(0.26, 0.05, 0.6, 0.01), // seconds of safety from the start of the roll
  roll_speed: v(520, 200, 900, 10),
  guard_cut: v(0.8, 0, 1, 0.05),         // share of damage a raised shield stops
  guard_stam: v(0.9, 0, 3, 0.05),        // stamina lost per point of damage blocked
  flask_heal: v(0.45, 0.1, 1, 0.05),     // share of max health a flask restores
  flask_time: v(0.9, 0.3, 2, 0.05),      // seconds, cannot be cancelled
  flasks: v(3, 1, 9, 1),
  hit_invuln: v(0.6, 0, 1.5, 0.05),      // seconds of safety after being hurt
  oxygen: v(150, 40, 400, 5),            // seconds of air at the start
  oxygen_dmg: v(7, 0, 30, 1),            // health lost per second with no air
  harpoon_range: v(320, 100, 600, 10),
  harpoon_cd: v(1.1, 0.3, 3, 0.05),
  harpoon_dmg: v(6, 1, 30, 1),
  reel_hp: v(0.3, 0.05, 0.6, 0.05),      // a minion under this share of health is reeled in alive
  bag_cap: v(10, 4, 30, 1),

  // ---- minions: values at depth 1; each deeper depth adds the depth_* shares ----
  depth_hp: v(0.4, 0, 1.5, 0.05),
  depth_dmg: v(0.28, 0, 1, 0.02),
  depth_speed: v(0.07, 0, 0.3, 0.01),
  angler_hp: v(34, 5, 200, 1),
  angler_dmg: v(16, 1, 80, 1),
  angler_speed: v(80, 20, 200, 5),
  angler_windup: v(0.7, 0.2, 1.5, 0.05),
  angler_lunge: v(640, 300, 1000, 10),
  angler_recover: v(1.0, 0.3, 2.5, 0.05),
  jelly_hp: v(26, 5, 200, 1),
  jelly_dmg: v(12, 1, 60, 1),
  jelly_period: v(3.2, 1, 8, 0.1),       // seconds between spore volleys
  crab_hp: v(70, 10, 300, 1),
  crab_dmg: v(22, 1, 80, 1),
  crab_windup: v(0.85, 0.3, 1.8, 0.05),
  eel_hp: v(45, 5, 200, 1),
  eel_dmg: v(22, 1, 80, 1),
  eel_tele: v(0.85, 0.3, 2, 0.05),       // seconds the warning line shows
  eel_speed: v(880, 400, 1400, 10),
  elite_hp: v(1.9, 1, 4, 0.1),
  elite_dmg: v(1.3, 1, 3, 0.05),
  soul_per_mob: v(18, 1, 100, 1),
  fish_chance: v(0.65, 0, 1, 0.05),      // share of ambient fish that give a catch

  // ---- bosses ----
  knight_hp: v(520, 100, 2000, 10),
  knight_speed: v(95, 40, 250, 5),
  maw_hp: v(760, 100, 3000, 10),
  levi_hp: v(1100, 200, 4000, 10),
  boss_dmg_depth: v(0.15, 0, 0.6, 0.01), // extra damage a boss deals per depth below the first
  boss_souls: v(260, 50, 1000, 10),
  limp_speed: v(0.8, 0.4, 1, 0.05),      // a limping boss moves at this share of its speed
  rest_time: v(5, 1, 12, 0.5),           // seconds a hurt boss rests, taking extra damage
  rest_bonus: v(1.5, 1, 3, 0.1),
  rest_regen: v(0.015, 0, 0.1, 0.005),   // share of its health a resting boss recovers per second

  // ---- the tavern ----
  level_cost: v(40, 10, 200, 5),         // souls for the first level
  level_growth: v(28, 0, 100, 2),        // extra souls per level
  weapon_dmg: v(0.15, 0.02, 0.5, 0.01),  // share of damage per weapon level
  sell_mult: v(1, 0.3, 3, 0.05),
  renown_per_sale: v(80, 20, 400, 10),   // gold sold for one renown (+5% prices, one more patron)
};
})();
