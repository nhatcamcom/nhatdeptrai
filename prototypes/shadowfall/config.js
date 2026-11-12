// PROTOTYPE - NOT FOR PRODUCTION
// Question: Chém theo chuột + lướt + lốc xoáy qua 5 đợt quái và Boss có giữ được cảm giác căng và đã tay suốt 8–10 phút không?
// Date: 2026-11-13
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// Units: distances in world pixels (the screen is 480x270), times in seconds, speeds in px/s.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- Look ----
  darkness: { value: 0.6, min: 0, max: 0.95, step: 0.05 },        // how dark the arena is outside the lights
  player_light: { value: 120, min: 40, max: 260, step: 5 },        // px radius of the warrior's torch glow

  // ---- Warrior ----
  player_hp: { value: 100, min: 20, max: 400, step: 5 },
  player_speed: { value: 92, min: 40, max: 200, step: 2 },         // px/s
  player_accel: { value: 16, min: 2, max: 40, step: 1 },           // how fast velocity reaches the target (1/s)
  hurt_iframes: { value: 0.6, min: 0, max: 2, step: 0.05 },        // s untouchable after a hit

  // ---- Sword (left mouse) ----
  attack_damage: { value: 12, min: 1, max: 60, step: 1 },
  attack_cooldown: { value: 0.36, min: 0.1, max: 1.2, step: 0.02 }, // s between swings
  attack_range: { value: 30, min: 12, max: 80, step: 1 },          // px reach of the slash
  attack_arc_deg: { value: 120, min: 40, max: 220, step: 5 },      // degrees covered by a slash
  attack_knockback: { value: 150, min: 0, max: 500, step: 10 },    // px/s impulse
  attack_lunge: { value: 45, min: 0, max: 200, step: 5 },          // px/s forward step on a swing
  combo_window: { value: 0.75, min: 0.2, max: 2, step: 0.05 },     // s to chain the next swing
  combo_heavy_mult: { value: 1.7, min: 1, max: 4, step: 0.1 },     // 3rd swing damage multiplier
  lifesteal_per_hit: { value: 1, min: 0, max: 10, step: 1 },       // hp healed per enemy hit
  lifesteal_cap_per_sec: { value: 3, min: 0, max: 30, step: 1 },   // hp/s ceiling on lifesteal (keeps it from being too easy)
  crit_base: { value: 0.05, min: 0, max: 1, step: 0.01 },
  crit_mult: { value: 2, min: 1, max: 5, step: 0.1 },
  hitstop: { value: 0.045, min: 0, max: 0.2, step: 0.005 },        // s freeze on a landed hit

  // ---- Dash (Space) ----
  dash_speed: { value: 320, min: 100, max: 700, step: 10 },
  dash_time: { value: 0.16, min: 0.05, max: 0.5, step: 0.01 },
  dash_iframes: { value: 0.24, min: 0, max: 0.6, step: 0.01 },
  dash_cooldown: { value: 0.9, min: 0.1, max: 4, step: 0.05 },
  dashcut_damage: { value: 14, min: 0, max: 80, step: 1 },          // per enemy, with the Lướt Chém upgrade

  // ---- Shadow Whirlwind (E) ----
  whirl_cooldown: { value: 9, min: 1, max: 30, step: 0.5 },
  whirl_time: { value: 1.4, min: 0.3, max: 4, step: 0.1 },
  whirl_radius: { value: 48, min: 20, max: 120, step: 2 },
  whirl_tick: { value: 0.15, min: 0.05, max: 0.5, step: 0.01 },
  whirl_damage: { value: 7, min: 1, max: 40, step: 1 },             // per tick
  whirl_knockback: { value: 70, min: 0, max: 300, step: 5 },
  whirl_move_mult: { value: 0.75, min: 0, max: 1.5, step: 0.05 },

  // ---- Experience ----
  xp_base: { value: 8, min: 2, max: 50, step: 1 },                  // xp for level 2
  xp_growth: { value: 6, min: 0, max: 40, step: 1 },                // extra xp per level after
  magnet_radius: { value: 42, min: 10, max: 200, step: 2 },

  // ---- Level-up cards ----
  up_dmg: { value: 0.2, min: 0, max: 1, step: 0.05 },
  up_aspd: { value: 0.15, min: 0, max: 1, step: 0.05 },
  up_mspd: { value: 0.1, min: 0, max: 0.5, step: 0.02 },
  up_maxhp: { value: 20, min: 0, max: 100, step: 5 },
  up_leech: { value: 1, min: 0, max: 5, step: 1 },
  up_regen: { value: 1, min: 0, max: 5, step: 0.5 },
  up_cd: { value: 0.15, min: 0, max: 0.5, step: 0.05 },
  up_range: { value: 0.15, min: 0, max: 0.5, step: 0.05 },
  up_whirl_dmg: { value: 0.35, min: 0, max: 1, step: 0.05 },
  up_whirl_radius: { value: 0.2, min: 0, max: 0.6, step: 0.05 },
  up_crit: { value: 0.1, min: 0, max: 0.5, step: 0.05 },
  up_magnet: { value: 0.5, min: 0, max: 2, step: 0.1 },
  potion_heal: { value: 0.4, min: 0, max: 1, step: 0.05 },          // share of max hp

  // ---- Enemies ----
  ghoul_hp: { value: 18, min: 1, max: 200, step: 1 },
  ghoul_speed: { value: 56, min: 10, max: 160, step: 2 },
  ghoul_damage: { value: 8, min: 0, max: 60, step: 1 },
  archer_hp: { value: 16, min: 1, max: 200, step: 1 },
  archer_speed: { value: 40, min: 10, max: 160, step: 2 },
  archer_damage: { value: 8, min: 0, max: 60, step: 1 },
  archer_range: { value: 130, min: 40, max: 260, step: 5 },
  archer_cooldown: { value: 2.4, min: 0.5, max: 8, step: 0.1 },
  archer_aim_time: { value: 0.7, min: 0.1, max: 2, step: 0.05 },
  arrow_speed: { value: 150, min: 40, max: 400, step: 10 },
  brute_hp: { value: 110, min: 10, max: 600, step: 5 },
  brute_speed: { value: 30, min: 10, max: 120, step: 2 },
  brute_damage: { value: 22, min: 0, max: 80, step: 1 },
  brute_windup: { value: 0.9, min: 0.2, max: 2.5, step: 0.05 },
  brute_slam_radius: { value: 40, min: 10, max: 100, step: 2 },
  wraith_hp: { value: 26, min: 1, max: 200, step: 1 },
  wraith_speed: { value: 46, min: 10, max: 160, step: 2 },
  wraith_damage: { value: 12, min: 0, max: 60, step: 1 },
  wraith_dash_speed: { value: 280, min: 60, max: 600, step: 10 },
  wraith_tele_time: { value: 0.55, min: 0.1, max: 2, step: 0.05 },
  enemy_hp_per_wave: { value: 0.12, min: 0, max: 1, step: 0.01 },   // +12% hp each wave after the first
  enemy_dmg_per_wave: { value: 0.08, min: 0, max: 1, step: 0.01 },

  // ---- Waves ----
  wave_time_base: { value: 40, min: 10, max: 180, step: 5 },        // s over which wave 1 spawns
  wave_time_per_wave: { value: 10, min: 0, max: 60, step: 1 },
  wave_break: { value: 4, min: 1, max: 15, step: 0.5 },             // s of quiet between waves
  max_alive: { value: 26, min: 4, max: 80, step: 1 },
  ghoul_w1: { value: 12, min: 0, max: 60, step: 1 },
  ghoul_per_wave: { value: 3, min: 0, max: 20, step: 1 },
  archer_w1: { value: 2, min: 0, max: 30, step: 1 },
  archer_per_wave: { value: 2, min: 0, max: 10, step: 1 },
  brute_from_wave: { value: 3, min: 1, max: 5, step: 1 },
  brute_w_first: { value: 2, min: 0, max: 10, step: 1 },
  brute_per_wave: { value: 1, min: 0, max: 5, step: 1 },
  wraith_from_wave: { value: 4, min: 1, max: 5, step: 1 },
  wraith_w_first: { value: 5, min: 0, max: 20, step: 1 },
  wraith_per_wave: { value: 3, min: 0, max: 10, step: 1 },

  // ---- Boss: Kẻ Canh Giữ Bóng Tối ----
  boss_hp: { value: 1500, min: 100, max: 6000, step: 50 },
  boss_speed: { value: 40, min: 10, max: 120, step: 2 },
  boss_contact: { value: 14, min: 0, max: 60, step: 1 },
  boss_charge_speed: { value: 300, min: 100, max: 600, step: 10 },
  boss_charge_tele: { value: 0.8, min: 0.2, max: 2, step: 0.05 },
  boss_slam_damage: { value: 22, min: 0, max: 80, step: 1 },
  boss_slam_radius: { value: 50, min: 20, max: 120, step: 2 },
  boss_orbs: { value: 14, min: 4, max: 40, step: 1 },
  boss_orb_speed: { value: 90, min: 30, max: 250, step: 5 },
  boss_orb_damage: { value: 10, min: 0, max: 60, step: 1 },
  boss_cleave_damage: { value: 24, min: 0, max: 80, step: 1 },
  boss_cleave_radius: { value: 85, min: 30, max: 160, step: 5 },
  boss_cleave_tele: { value: 0.7, min: 0.2, max: 2, step: 0.05 },
  boss_phase2_at: { value: 0.5, min: 0.1, max: 0.9, step: 0.05 },   // share of hp
  boss_phase2_speed: { value: 1.3, min: 1, max: 2.5, step: 0.05 },

  // ---- Shadow shards (kept between runs) ----
  shards_per_kills: { value: 4, min: 1, max: 20, step: 1 },          // 1 shard per N kills
  shards_per_wave: { value: 3, min: 0, max: 20, step: 1 },
  shards_win: { value: 30, min: 0, max: 200, step: 5 },
  perm_cost_base: { value: 8, min: 1, max: 100, step: 1 },
  perm_cost_step: { value: 6, min: 0, max: 50, step: 1 },
  perm_hp: { value: 10, min: 0, max: 50, step: 1 },
  perm_dmg: { value: 0.06, min: 0, max: 0.3, step: 0.01 },
  perm_spd: { value: 0.04, min: 0, max: 0.2, step: 0.01 },
  perm_cd: { value: 0.06, min: 0, max: 0.3, step: 0.01 },
};
