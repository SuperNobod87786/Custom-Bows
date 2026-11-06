import { world, ItemStack } from "@minecraft/server";
export function getTintedArrowType(item, loc) {
    if (item.typeId !== "minecraft:arrow")
        return;
    const localKey = item.localizationKey;
    if (localKey === "item.arrow.name") {
        return { effects: ["none"], seconds: undefined, amplifier: undefined };
    }
    else if (localKey === "tipped_arrow.effect.nightVision") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            6: {
                seconds: 22,
                amplifier: 0
            },
            7: {
                seconds: 60,
                amplifier: 0
            },
        });
        return { effects: ["night_vision"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.invisibility") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            8: {
                seconds: 22,
                amplifier: 0
            },
            9: {
                seconds: 60,
                amplifier: 0
            },
        });
        return { effects: ["invisibility"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.jump") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            10: {
                seconds: 22,
                amplifier: 0
            },
            11: {
                seconds: 60,
                amplifier: 0
            },
            12: {
                seconds: 11,
                amplifier: 1
            }
        });
        return { effects: ["jump_boost"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.fireResistance") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            13: {
                seconds: 22,
                amplifier: 0
            },
            14: {
                seconds: 60,
                amplifier: 0
            }
        });
        return { effects: ["fire_resistance"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.moveSpeed") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            15: {
                seconds: 22,
                amplifier: 0
            },
            16: {
                seconds: 60,
                amplifier: 0
            },
            17: {
                seconds: 11,
                amplifier: 1
            }
        });
        return { effects: ["speed"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.moveSlowdown") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            18: {
                seconds: 11,
                amplifier: 0
            },
            19: {
                seconds: 30,
                amplifier: 0
            },
            43: {
                seconds: 2,
                amplifier: 3
            }
        });
        return { effects: ["slowness"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.waterBreathing") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            20: {
                seconds: 22,
                amplifier: 0
            },
            21: {
                seconds: 60,
                amplifier: 0
            }
        });
        return { effects: ["water_breathing"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.heal") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            22: {
                seconds: 0,
                amplifier: 0
            },
            23: {
                seconds: 0,
                amplifier: 1
            }
        });
        return { effects: ["instant_health"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.harm") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            24: {
                seconds: 0,
                amplifier: 0
            },
            25: {
                seconds: 0,
                amplifier: 1
            }
        });
        return { effects: ["instant_damage"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.poison") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            26: {
                seconds: 5,
                amplifier: 0
            },
            27: {
                seconds: 15,
                amplifier: 0
            },
            28: {
                seconds: 2,
                amplifier: 1
            }
        });
        return { effects: ["poison"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.regeneration") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            29: {
                seconds: 5,
                amplifier: 0
            },
            30: {
                seconds: 15,
                amplifier: 0
            },
            31: {
                seconds: 2,
                amplifier: 1
            }
        });
        return { effects: ["regeneration"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.damageBoost") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            32: {
                seconds: 22,
                amplifier: 0
            },
            33: {
                seconds: 60,
                amplifier: 0
            },
            34: {
                seconds: 11,
                amplifier: 1
            }
        });
        return { effects: ["strength"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.weakness") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            35: {
                seconds: 11,
                amplifier: 0
            },
            36: {
                seconds: 30,
                amplifier: 0
            }
        });
        return { effects: ["weakness"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.wither") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            37: {
                seconds: 5,
                amplifier: 1
            }
        });
        return { effects: ["wither"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.turtleMaster") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            38: [
                {
                    seconds: 2,
                    amplifier: 3
                },
                {
                    seconds: 2,
                    amplifier: 2
                }
            ],
            39: [
                {
                    seconds: 5,
                    amplifier: 3
                },
                {
                    seconds: 5,
                    amplifier: 2
                }
            ],
            40: [
                {
                    seconds: 2,
                    amplifier: 5
                },
                {
                    seconds: 2,
                    amplifier: 3
                }
            ],
        });
        return { effects: ["resistance", "slowness"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.slowFalling") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            41: {
                seconds: 11,
                amplifier: 0
            },
            42: {
                seconds: 30,
                amplifier: 0
            }
        });
        return { effects: ["slow_falling"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.infested") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            47: {
                seconds: 22,
                amplifier: 0
            }
        });
        return { effects: ["infested"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.oozing") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            46: {
                seconds: 22,
                amplifier: 0
            }
        });
        return { effects: ["oozing"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.weaving") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            45: {
                seconds: 22,
                amplifier: 0
            }
        });
        return { effects: ["weaving"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.windCharged") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            44: {
                seconds: 22,
                amplifier: 0
            }
        });
        return { effects: ["wind_charged"], seconds: 0, amplifier: 0 };
    }
    else if (localKey === "tipped_arrow.effect.freezing") {
        const arrowEffectSpecs = getTintedArrowSpecs(item, loc, {
            48: {
                seconds: 0,
                amplifier: 0
            },
            49: {
                seconds: 0,
                amplifier: 0
            }
        });
        return { effects: ["freezing"], seconds: 0, amplifier: 0 };
    }
    else {
        return { effects: [localKey.split(".")[2]], seconds: undefined, amplifier: undefined }; // for unobtainable arrows empty, mundane, thick, awkward, water, luck, levitation
    }
}
function getTintedArrowSpecs(item, loc, arrowData) { }
