"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.natura_v2_dark_full_theme = void 0;
const natura_v2_dark_controlls = {
    color: {
        "neutral50": "#212529",
        "neutral100": "#343a40",
        "neutral200": "#495057",
        "neutral300": "#868e96",
        "neutral400": "#adb5bd",
        "neutral500": "#ced4da",
        "neutral600": "#dee2e6",
        "neutral700": "#e9ecef",
        "neutral800": "#f1f3f5",
        "neutral900": "#f8f9fa",
        "primary": "#EB6619",
        "onPrimary": "#FFFFFF",
        "primaryLight": "#F29966",
        "onPrimaryLight": "#000000",
        "primaryLightest": "#F8CCB2",
        "onPrimaryLightest": "#000000",
        "primaryDark": "#A0430E",
        "onPrimaryDark": "#FFFFFF",
        "primaryDarkest": "#502207",
        "onPrimaryDarkest": "#FFFFFF",
        "secondary": "#263F30",
        "onSecondary": "#FFFFFF",
        "secondaryLight": "#599471",
        "onSecondaryLight": "#FFFFFF",
        "secondaryLightest": "#AACCB7",
        "onSecondaryLightest": "#000000",
        "secondaryDark": "#192A20",
        "onSecondaryDark": "#FFFFFF",
        "secondaryDarkest": "#0D1510",
        "onSecondaryDarkest": "#FFFFFF",
        "background": "#121212",
        "onBackground": "#ffffff",
        "surface": "#333333",
        "onSurface": "#ffffff",
        "highlight": "#ffffff",
        "highEmphasis": "#fafafa",
        "mediumEmphasis": "#bbbbbb",
        "lowEmphasis": "#777777",
        "link": "#86D6FB",
        "onLink": "#000000",
        "success": "#BCDEA2",
        "onSuccess": "#000000",
        "warning": "#FEF59E",
        "onWarning": "#000000",
        "alert": "#FFAA96",
        "onAlert": "#000000"
    },
    "typography": {
        "fontSize": {
            "level1": 13,
            "level2": 14,
            "level3": 16,
            "level4": 18,
            "level5": 20,
            "level6": 23,
            "level7": 26,
            "level8": 29,
            "level9": 32,
            "level10": 36,
            "level11": 41,
            "level12": 46,
            "level13": 52,
            "level14": 58,
            "level15": 66,
            "level16": 74,
            "level17": 83
        },
        "lineHeight": {
            "auto": 1,
            "reset": 1,
            "small": 1.25,
            "medium": 1.5,
            "large": 2
        },
        "fontFamily": {
            "primary": "Roboto",
            "secondary": "sans-serif",
            "branding": "Helvetica Now Text",
            "code": "Roboto Mono"
        },
        "fontWeight": {
            "regular": 400,
            "medium": 500
        },
        "display": {
            "fontFamily": "Helvetica Now Display",
            "fontWeight": 700
        },
        "headline": {
            "fontFamily": "Helvetica Now Display",
            "fontWeight": 500
        },
        "body": {
            "regular": {
                "fontFamily": "Helvetica Now Text",
                "fontWeight": 400
            },
            "bold": {
                "fontFamily": "Helvetica Now Text",
                "fontWeight": 700
            }
        },
        "fallback": {
            "fontFamily": "Arial",
            "fontWeight": 400
        }
    },
};
exports.natura_v2_dark_full_theme = {
    "borderRadius": {
        "none": 0,
        "small": 2,
        "medium": 4,
        "large": 8
    },
    "alert": {
        "title": {
            "fontSize": 20,
            "letterSpacing": 0.24,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "content": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 4
    },
    "appBarTop": {
        "title": {
            "fontSize": 20,
            "letterSpacing": 0.24,
            "lineHeight": 1.25,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        }
    },
    "avatar": {
        "standard": {
            "fontSize": 12,
            "letterSpacing": 0,
            "lineHeight": 1.5,
            "borderRadius": 12
        },
        "semi": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "borderRadius": 16
        },
        "semiX": {
            "fontSize": 20,
            "letterSpacing": 0.24,
            "lineHeight": 1.5,
            "borderRadius": 20
        },
        "medium": {
            "fontSize": 24,
            "letterSpacing": 0,
            "lineHeight": 1.5,
            "borderRadius": 24
        },
        "largeXXX": {
            "fontSize": 48,
            "letterSpacing": 0,
            "lineHeight": 1.5,
            "borderRadius": 44
        },
        "primary": {
            "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
            "fontWeight": 400
        },
        "fallback": {
            "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
            "fontWeight": 400
        },
        "color": {
            "background": natura_v2_dark_controlls.color.primary,
            "label": natura_v2_dark_controlls.color.highEmphasis
        }
    },
    "badge": {
        "label": {
            "fontSize": 12,
            "letterSpacing": 0.38,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "standard": {
            "height": 16,
            "borderRadius": 8
        },
        "dot": {
            "height": 8,
            "borderRadius": 4
        },
        "color": {
            "primary": {
                "label": natura_v2_dark_controlls.color.highEmphasis,
                "background": natura_v2_dark_controlls.color.primary
            },
            "secondary": {
                "label": natura_v2_dark_controlls.color.highlight,
                "background": natura_v2_dark_controlls.color.secondary
            },
            "success": {
                "label": natura_v2_dark_controlls.color.onSuccess,
                "background": natura_v2_dark_controlls.color.success,
            },
            "alert": {
                "label": natura_v2_dark_controlls.color.onAlert,
                "background": natura_v2_dark_controlls.color.alert,
            }
        }
    },
    "button": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 1.23,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 500
            }
        },
        "borderRadius": 4,
        "contained": {
            "color": {
                "enable": {
                    "background": natura_v2_dark_controlls.color.primary,
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#bbbbbb",
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "hover": {
                    "background": natura_v2_dark_controlls.color.primaryDark,
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "focus": {
                    "background": natura_v2_dark_controlls.color.primaryDarkest,
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                }
            }
        },
        "outlined": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00",
                    "border": natura_v2_dark_controlls.color.primary,
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#FFFFFF00",
                    "border": natura_v2_dark_controlls.color.lowEmphasis,
                    "label": natura_v2_dark_controlls.color.mediumEmphasis
                },
                "hover": {
                    "background": "#f1f3f5",
                    "border": natura_v2_dark_controlls.color.primary,
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "focus": {
                    "background": "#e9ecef",
                    "border": natura_v2_dark_controlls.color.primary,
                    "label": natura_v2_dark_controlls.color.highEmphasis
                }
            }
        },
        "text": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00",
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#FFFFFF00",
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.mediumEmphasis
                },
                "hover": {
                    "background": "#f1f3f5",
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                },
                "focus": {
                    "background": "#e9ecef",
                    "border": "#FFFFFF00",
                    "label": natura_v2_dark_controlls.color.highEmphasis
                }
            }
        }
    },
    "card": {
        "borderRadius": {
            "enable": 4,
            "disable": 0
        },
        "color": {
            "background": natura_v2_dark_controlls.color.surface
        }
    },
    "checkbox": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 2
    },
    "counter": {
        "label": {
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 14,
            "letterSpacing": 0.11,
            "lineHeight": 1.25
        },
        "content": {
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.25
        },
        "borderRadius": 4
    },
    "dialog": {
        "title": {
            "fontSize": 20,
            "letterSpacing": 0.24,
            "lineHeight": 1.25,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "body": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 4,
        "color": {
            "background": natura_v2_dark_controlls.color.surface,
            "title": natura_v2_dark_controlls.color.highlight
        }
    },
    "divider": {
        "color": {
            "background": natura_v2_dark_controlls.color.lowEmphasis
        }
    },
    "expansionPanel": {
        "title": {
            "fontSize": 16,
            "letterSpacing": 0.13,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 4
    },
    "iconButton": {
        "semi": {
            "borderRadius": 16
        },
        "semiX": {
            "borderRadius": 20
        },
        "medium": {
            "borderRadius": 24
        },
        "standard": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00"
                },
                "disable": {
                    "background": "#FFFFFF00"
                },
                "hover": {
                    "background": "#f1f3f5"
                },
                "focus": {
                    "background": "#e9ecef"
                }
            }
        },
        "float": {
            "color": {
                "enable": {
                    "background": natura_v2_dark_controlls.color.surface
                },
                "disable": {
                    "background": natura_v2_dark_controlls.color.lowEmphasis
                },
                "hover": {
                    "background": "#f1f3f5"
                },
                "focus": {
                    "background": "#e9ecef"
                }
            }
        },
        "overlay": {
            "color": {
                "enable": {
                    "background": natura_v2_dark_controlls.color.highlight
                },
                "disable": {
                    "background": natura_v2_dark_controlls.color.highlight
                },
                "hover": {
                    "background": natura_v2_dark_controlls.color.highlight
                },
                "focus": {
                    "background": natura_v2_dark_controlls.color.highlight
                }
            }
        }
    },
    "image": {
        "borderRadius": {
            "medium": 4,
            "none": 0
        }
    },
    "link": {
        "label": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "color": {
            "label": {
                "enable": {
                    "default": natura_v2_dark_controlls.color.link,
                    "light": natura_v2_dark_controlls.color.lowEmphasis
                }
            }
        }
    },
    "navigationDrawer": {
        "header": {
            "title": {
                "fontSize": 20,
                "letterSpacing": 0.24,
                "lineHeight": 1.25,
                "primary": {
                    "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 500
                },
                "fallback": {
                    "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            },
            "subtitle": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            }
        },
        "section": {
            "title": {
                "fontSize": 12,
                "letterSpacing": 0.38,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            },
            "item": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            }
        }
    },
    "progressIndicator": {
        "standard": {
            "borderRadius": 12
        },
        "semi": {
            "borderRadius": 16
        },
        "medium": {
            "borderRadius": 24
        },
        "large": {
            "borderRadius": 32
        },
        "color": {
            "stroke": natura_v2_dark_controlls.color.primary,
            "layer": natura_v2_dark_controlls.color.surface,
        }
    },
    "radioButton": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 12,
        "color": {
            "select": {
                "border": natura_v2_dark_controlls.color.primary,
                "content": natura_v2_dark_controlls.color.primary
            },
            "unselect": {
                "border": natura_v2_dark_controlls.color.highlight,
                "content": natura_v2_dark_controlls.color.highlight
            },
            "disable": {
                "border": natura_v2_dark_controlls.color.lowEmphasis,
                "content": natura_v2_dark_controlls.color.lowEmphasis
            }
        }
    },
    "rating": {
        "counter": {
            "label": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            }
        },
        "input": {
            "label": {
                "fontSize": 12,
                "letterSpacing": 0.38,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            }
        }
    },
    "shortcut": {
        "label": {
            "fontSize": 12,
            "letterSpacing": 0.38,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "contained": {
            "color": {
                "enable": {
                    "primary": {
                        "background": natura_v2_dark_controlls.color.primary,
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": natura_v2_dark_controlls.color.surface,
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    }
                },
                "disable": {
                    "primary": {
                        "background": natura_v2_dark_controlls.color.lowEmphasis,
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.mediumEmphasis
                    },
                    "neutral": {
                        "background": natura_v2_dark_controlls.color.lowEmphasis,
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.mediumEmphasis
                    }
                },
                "hover": {
                    "primary": {
                        "background": natura_v2_dark_controlls.color.primaryDark,
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#f1f3f5",
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    }
                },
                "focus": {
                    "primary": {
                        "background": natura_v2_dark_controlls.color.primaryDarkest,
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#e9ecef",
                        "border": "#FFFFFF00",
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    }
                }
            }
        },
        "outlined": {
            "color": {
                "enable": {
                    "primary": {
                        "background": "#FFFFFF00",
                        "border": natura_v2_dark_controlls.color.primary,
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#FFFFFF00",
                        "border": natura_v2_dark_controlls.color.lowEmphasis,
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    }
                },
                "disable": {
                    "primary": {
                        "background": natura_v2_dark_controlls.color.highlight,
                        "border": natura_v2_dark_controlls.color.lowEmphasis,
                        "label": natura_v2_dark_controlls.color.lowEmphasis,
                    },
                    "neutral": {
                        "background": natura_v2_dark_controlls.color.highlight,
                        "border": natura_v2_dark_controlls.color.lowEmphasis,
                        "label": natura_v2_dark_controlls.color.lowEmphasis,
                    }
                },
                "hover": {
                    "primary": {
                        "background": "#f1f3f5",
                        "border": natura_v2_dark_controlls.color.primaryDark,
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#f1f3f5",
                        "border": natura_v2_dark_controlls.color.mediumEmphasis,
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    }
                },
                "focus": {
                    "primary": {
                        "background": "#e9ecef",
                        "border": natura_v2_dark_controlls.color.primaryDark,
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#e9ecef",
                        "border": natura_v2_dark_controlls.color.mediumEmphasis,
                        "label": natura_v2_dark_controlls.color.highEmphasis
                    }
                }
            }
        },
        "borderRadius": 28
    },
    "snackbar": {
        "content": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 4
    },
    "tab": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 1.23,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        }
    },
    "tag": {
        "label": {
            "fontSize": 12,
            "letterSpacing": 0.38,
            "lineHeight": 1.25,
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "small": {
            "borderRadius": {
                "enable": 8,
                "disable": 0
            }
        },
        "standard": {
            "borderRadius": {
                "enable": 12,
                "disable": 0
            }
        },
        "color": {
            "background": {
                "primary": natura_v2_dark_controlls.color.primary,
                "secondary": natura_v2_dark_controlls.color.secondary,
                "success": natura_v2_dark_controlls.color.success,
                "alert": natura_v2_dark_controlls.color.alert,
                "warning": natura_v2_dark_controlls.color.warning,
                "link": natura_v2_dark_controlls.color.link
            },
            "label": {
                "primary": natura_v2_dark_controlls.color.highEmphasis,
                "secondary": natura_v2_dark_controlls.color.highlight,
                "success": natura_v2_dark_controlls.color.onSuccess,
                "alert": natura_v2_dark_controlls.color.onAlert,
                "warning": natura_v2_dark_controlls.color.onWarning,
                "link": natura_v2_dark_controlls.color.onLink
            }
        }
    },
    "textField": {
        "label": {
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 14,
            "letterSpacing": 0.11,
            "lineHeight": 1.5
        },
        "content": {
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.25
        },
        "helperText": {
            "primary": {
                "fontFamily": natura_v2_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 12,
            "letterSpacing": 0.38,
            "lineHeight": 1.25
        },
        "borderRadius": 4
    },
    "heading1": {
        "fontSize": 96,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0
    },
    "heading2": {
        "fontSize": 60,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0
    },
    "heading3": {
        "fontSize": 48,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0
    },
    "heading4": {
        "fontSize": 34,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0.27
    },
    "heading5": {
        "fontSize": 24,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0
    },
    "heading6": {
        "fontSize": 20,
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": 0.24
    },
    "subtitle1": {
        "fontSize": 16,
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": 0.13
    },
    "subtitle2": {
        "fontSize": 14,
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": 0.11
    },
    "body1": {
        "fontSize": 16,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0.51
    },
    "body2": {
        "fontSize": 14,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0.22
    },
    "caption": {
        "fontSize": 12,
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": 0.38
    },
    "overline": {
        "fontSize": 12,
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": 1.92
    },
    "opacity": {
        "transparent": 0,
        "lower": 0.04,
        "veryLow": 0.08,
        "low": 0.12,
        "mediumLow": 0.16,
        "disabledLow": 0.24,
        "disabled": 0.32,
        "medium": 0.48,
        "mediumHigh": 0.56,
        "high": 0.64,
        "veryHigh": 0.8,
        "opaque": 1
    },
    "size": {
        "none": 0,
        "micro": 4,
        "tiny": 8,
        "small": 16,
        "standard": 24,
        "semi": 32,
        "semiX": 40,
        "medium": 48,
        "mediumX": 56,
        "large": 64,
        "largeX": 72,
        "largeXX": 80,
        "largeXXX": 88,
        "huge": 96,
        "hugeX": 128,
        "hugeXX": 144,
        "hugeXXX": 192,
        "veryHuge": 256
    },
    "typography": {
        "fontSize": {
            "level1": 13,
            "level2": 14,
            "level3": 16,
            "level4": 18,
            "level5": 20,
            "level6": 23,
            "level7": 26,
            "level8": 29,
            "level9": 32,
            "level10": 36,
            "level11": 41,
            "level12": 46,
            "level13": 52,
            "level14": 58,
            "level15": 66,
            "level16": 74,
            "level17": 83
        },
        "lineHeight": {
            "auto": 1,
            "reset": 1,
            "small": 1.25,
            "medium": 1.5,
            "large": 2
        },
        "fontFamily": {
            "primary": natura_v2_dark_controlls.typography.fontFamily.primary,
            "secondary": natura_v2_dark_controlls.typography.fontFamily.secondary,
            "branding": natura_v2_dark_controlls.typography.fontFamily.branding,
            "code": natura_v2_dark_controlls.typography.fontFamily.code
        },
        "fontWeight": {
            "regular": 400,
            "medium": 500
        },
        "display": {
            "fontFamily": natura_v2_dark_controlls.typography.display.fontFamily,
            "fontWeight": 700
        },
        "headline": {
            "fontFamily": natura_v2_dark_controlls.typography.headline.fontFamily,
            "fontWeight": 500
        },
        "body": {
            "regular": {
                "fontFamily": natura_v2_dark_controlls.typography.body.regular.fontFamily,
                "fontWeight": 400
            },
            "bold": {
                "fontFamily": natura_v2_dark_controlls.typography.body.bold.fontFamily,
                "fontWeight": 700
            }
        },
        "fallback": {
            "fontFamily": natura_v2_dark_controlls.typography.fallback.fontFamily,
            "fontWeight": 400
        }
    },
    "spacing": {
        "none": 0,
        "micro": 4,
        "tiny": 8,
        "small": 16,
        "standard": 24,
        "semi": 32,
        "large": 48,
        "xLarge": 64
    },
    "color": {
        "neutral50": "#f8f9fa",
        "neutral100": "#f1f3f5",
        "neutral200": "#e9ecef",
        "neutral300": "#dee2e6",
        "neutral400": "#ced4da",
        "neutral500": "#adb5bd",
        "neutral600": "#868e96",
        "neutral700": "#495057",
        "neutral800": "#343a40",
        "neutral900": "#212529",
        "primary": natura_v2_dark_controlls.color.primary,
        "onPrimary": natura_v2_dark_controlls.color.onPrimary,
        "primaryLight": natura_v2_dark_controlls.color.primaryLight,
        "onPrimaryLight": natura_v2_dark_controlls.color.onPrimaryLight,
        "primaryLightest": natura_v2_dark_controlls.color.primaryLightest,
        "onPrimaryLightest": natura_v2_dark_controlls.color.onPrimaryLightest,
        "primaryDark": natura_v2_dark_controlls.color.primaryDark,
        "onPrimaryDark": natura_v2_dark_controlls.color.onPrimaryDark,
        "primaryDarkest": natura_v2_dark_controlls.color.primaryDarkest,
        "onPrimaryDarkest": natura_v2_dark_controlls.color.onPrimaryDarkest,
        "secondary": natura_v2_dark_controlls.color.secondary,
        "onSecondary": natura_v2_dark_controlls.color.onSecondary,
        "secondaryLight": natura_v2_dark_controlls.color.secondaryLight,
        "onSecondaryLight": natura_v2_dark_controlls.color.onSecondaryLight,
        "secondaryDark": natura_v2_dark_controlls.color.secondaryDark,
        "onSecondaryDark": natura_v2_dark_controlls.color.onSecondaryDark,
        "secondaryDarkest": natura_v2_dark_controlls.color.secondaryDarkest,
        "onSecondaryDarkest": natura_v2_dark_controlls.color.onSecondaryDarkest,
        "background": natura_v2_dark_controlls.color.background,
        "onBackground": natura_v2_dark_controlls.color.onBackground,
        "surface": natura_v2_dark_controlls.color.surface,
        "onSurface": natura_v2_dark_controlls.color.onSurface,
        "highlight": natura_v2_dark_controlls.color.highlight,
        "highEmphasis": natura_v2_dark_controlls.color.highEmphasis,
        "mediumEmphasis": natura_v2_dark_controlls.color.mediumEmphasis,
        "lowEmphasis": natura_v2_dark_controlls.color.lowEmphasis,
        "link": natura_v2_dark_controlls.color.link,
        "onLink": natura_v2_dark_controlls.color.onLink,
        "success": natura_v2_dark_controlls.color.success,
        "onSuccess": natura_v2_dark_controlls.color.onSuccess,
        "warning": natura_v2_dark_controlls.color.warning,
        "onWarning": natura_v2_dark_controlls.color.onWarning,
        "alert": natura_v2_dark_controlls.color.alert,
        "onAlert": natura_v2_dark_controlls.color.onAlert,
    },
    "asset": {
        "font": {
            "file": {
                "display": "helvetica_now_display_bd",
                "headline": "helvetica_now_display_md",
                "body": {
                    "regular": "helvetica_now_display_regular",
                    "bold": "helvetica_now_display_bd"
                }
            }
        },
        "brand": {
            "neutral": {
                "a": {
                    "file": "<svg width=\"256\" height=\"55\" viewBox=\"0 0 256 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M98.111 22.52c10.461 0 15.26 6.523 15.26 12.922v13.906h-6.645V35.442c0-3.938-2.339-10.337-8.615-10.337-6.399 0-8.614 6.399-8.614 10.337v13.906h-6.522V35.442c-.123-6.4 4.676-12.922 15.136-12.922zM188.686 49.717c-10.461 0-15.261-6.522-15.261-12.921V23.012h6.522V36.92c0 3.938 2.339 10.337 8.616 10.337 6.398 0 8.614-6.4 8.614-10.337V23.013h6.522v13.905c.123 6.277-4.676 12.799-15.013 12.799zM139.952 47.379c-1.354 1.107-3.199 1.969-5.291 2.215-6.646.984-15.875-3.323-16.245-12.922-.369-9.844 9.354-14.029 15.753-13.782 10.706.246 14.52 8.368 14.52 12.921v13.537h-6.645V35.934c0-2.953-1.354-10.46-8.122-10.583-6.645-.123-8.737 6.03-8.86 10.583 0 2.954.615 10.091 8.245 10.583 2.338.123 5.66-.492 6.522-1.353v2.215h.123zM169.364 53.163c-.861.369-3.322.861-6.03.123-3.077-.739-8.245-2.215-8.245-12.799V11.2h6.645v11.567h6.154v4.308h-6.154s.123 8.245 0 14.89c-.123 5.907 1.723 8 2.954 8.614 1.6.862 4.308.493 4.554.247v2.338h.122zM210.097 34.58c0-6.522 3.323-11.075 9.354-11.69 4.183-.37 5.66.369 5.66.369v2.584s-2.215-.615-4.677.123c-2.706.862-3.814 4.923-3.814 6.276v17.229h-6.523v-14.89zM247.263 47.379c-1.354 1.107-3.2 1.969-5.293 2.215-6.644.984-15.874-3.323-16.243-12.922-.369-9.844 9.352-14.029 15.751-13.782C252.185 23.136 256 31.258 256 35.81v13.537h-6.645V35.934c0-2.953-1.354-10.46-8.123-10.583-6.645-.123-8.737 6.03-8.86 10.583 0 2.954.615 10.091 8.246 10.583 2.337.123 5.66-.492 6.522-1.353v2.215h.123z\" fill=\"#FF6C0E\"/><path d=\"M35.965 23.628c.738-2.215 1.107-3.446 2.461-7.753 1.6-5.415 5.292-9.722 11.076-7.876 6.768 2.092 5.168 8.86 4.06 11.691-.86 2.215-1.599 4.553-3.076 8.245-1.107 2.954 1.354 3.077 2.708 2.83 1.476-.369 5.907-2.584 8.737-3.937 2.092-.985 5.907-3.2 8-.985 2.214 2.215-.247 6.03-2.831 8.368-2.585 2.338-9.476 5.169-11.568 6.03-2.092.862-2.954 2.092-1.846 2.708.984.615 4.061 1.23 5.045 1.23.739.123 1.477.246 1.477.862 0 .615-1.723 1.969-5.907 3.446-2.215.738-6.4 1.23-8.737.86-3.692-.614-4.184-1.23-5.907-.614-1.23.492-1.354 1.476-3.2 2.215-1.846.738-4.553.615-6.645.246-2.092-.37-5.661-.739-6.03-2.338-.123-.616.615-1.108 1.23-1.723.616-.616 1.108-1.97-1.476-2.462-1.108-.369-8.369-1.6-12.799-3.814-4.553-2.339-6.276-5.784-5.784-7.015.37-.984 1.354-1.108 2.83-.861 1.6.246 8.492 2.215 10.584 2.215.861 0 1.477-.123 1.846-.739.861-1.476-1.723-3.2-3.815-5.66-2.953-3.57-8.737-9.476-4.43-14.768 2.83-3.446 8.491-1.23 10.83 1.477 1.845 2.092 4.922 6.276 7.26 9.23.985 1.107 1.969 1.722 2.953 1.722 1.231-.246 2.338-1.107 2.954-2.83zm-.492-16.121c-1.723 3.2-3.692 10.214-3.692 10.214s-.123.492-.492-.123c-.247-.37-3.077-4.184-4.43-5.907-1.6-1.97-8.861-9.599-17.106-5.292-7.507 3.938-4.677 13.414-2.338 16.983 1.353 2.215 4.06 5.538 4.799 6.522.123.123.123.246-.123.123-.615-.123-2.338-.615-5.415-1.354-2.707-.738-5.415-.615-6.153.616-.615.861-.861 2.215.246 4.184 2.215 3.938 8.245 10.214 18.213 12.183.246 0 .123.246 0 .492-.615 1.108-.246 1.97.123 2.585 1.477 1.723 3.077 2.46 9.722 3.568 9.107 1.6 12.43-1.476 12.799-1.969h.123c1.477.37 7.26 1.723 14.152-1.23 6.4-2.707 8.86-5.169 8.86-6.646 0-1.353-3.322-1.23-4.307-1.476-.246-.123-.246-.246 0-.37.492-.246 1.6-.738 2.462-1.23.984-.492 10.214-5.169 12.06-13.045s-5.292-7.999-9.23-6.276c-3.815 1.6-7.507 3.446-8.368 3.815-.123 0-.123 0-.123-.123.369-.861 1.722-4.43 2.46-7.63.862-3.692.493-14.029-9.721-15.875A11.039 11.039 0 0 0 47.779 0c-4.677 0-9.722 2.707-12.306 7.507z\" fill=\"url(#a)\"/><defs><pattern id=\"a\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"><use xlink:href=\"#b\" transform=\"matrix(.01299 0 0 .01853 0 0)\"/></pattern><image id=\"b\" width=\"77\" height=\"54\" xlink:href=\"https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/natura-a-official-embed-image-0.png\"/></defs></svg>",
                    "width": 256,
                    "height": 55
                },
                "b": {
                    "file": "<svg width=\"256\" height=\"192\" viewBox=\"0 0 256 192\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g clip-path=\"url(#clip0)\"><path d=\"M22.523 145.558c15.385 0 22.523 9.723 22.523 19.077v20.677h-9.723v-20.677c0-5.908-3.446-15.385-12.8-15.385-9.477 0-12.8 9.477-12.8 15.385v20.677H0v-20.677c0-9.354 7.138-19.077 22.523-19.077zM156.431 185.927c-15.385 0-22.523-9.723-22.523-19.077v-20.676h9.723v20.676c0 5.908 3.446 15.385 12.8 15.385 9.354 0 12.8-9.477 12.8-15.385v-20.676h9.723v20.676c0 9.354-7.139 19.077-22.523 19.077zM84.308 182.481c-2.093 1.6-4.677 2.831-7.877 3.323-9.846 1.6-23.508-4.923-24-19.2-.493-14.646 13.907-20.8 23.261-20.554 15.877.37 21.539 12.431 21.539 19.2v20.062h-9.846v-19.938c0-4.308-1.97-15.508-12.062-15.754-9.846-.246-13.046 8.861-13.046 15.63 0 4.308.984 15.016 12.308 15.631 3.446.246 8.369-.738 9.723-1.969v3.569zM127.877 191.097c-1.354.492-4.923 1.23-8.985.246-4.554-1.231-12.184-3.2-12.184-18.954v-43.446h9.846v17.231h8.984v6.03h-8.984s.246 12.185 0 22.031c-.246 8.739 2.461 11.815 4.431 12.8 2.338 1.231 6.276.739 6.769.492v3.57h.123zM188.062 163.404c0-9.6 5.046-16.492 13.784-17.354 6.154-.615 8.492.493 8.492.493v3.938s-3.2-.861-6.892.123c-4.061 1.231-5.538 7.262-5.538 9.354v25.6h-9.846v-22.154zM243.077 182.481c-2.092 1.6-4.677 2.831-7.877 3.323-9.846 1.6-23.508-4.923-24-19.2-.492-14.646 13.908-20.8 23.262-20.554 15.876.37 21.538 12.431 21.538 19.2v20.062h-9.723v-19.938c0-4.308-1.969-15.508-12.062-15.754-9.846-.246-13.046 8.861-13.046 15.63 0 4.308.985 15.016 12.308 15.631 3.446.246 8.369-.738 9.723-1.969v3.569h-.123z\" fill=\"#FF6B0B\"/><path d=\"M175.754 35.528c-1.6 7.261-4.677 15.015-5.539 16.985-.123.369 0 .369.247.246 1.846-.862 9.846-4.8 18.338-8.493 8.492-3.569 24.369-3.569 20.308 14.031-4.062 17.477-24.616 27.816-26.708 28.923-1.969.985-4.431 2.093-5.415 2.708-.37.246-.616.492.123.738 2.215.616 9.477.123 9.477 3.2-.123 3.323-5.416 8.739-19.57 14.77-15.384 6.523-28.061 3.569-31.261 2.83-.123 0-.123 0-.246.123-.862.862-8 7.754-28.185 4.308-14.523-2.461-18.092-3.938-21.415-7.877-.985-1.108-1.6-3.2-.37-5.661.37-.616.37-.985-.123-1.108-21.907-4.554-35.2-18.339-40.123-27.077-2.461-4.43-1.723-7.385-.492-9.23 1.723-2.585 7.63-2.832 13.662-1.355 6.769 1.724 10.461 2.708 11.815 3.077.492.123.492 0 .246-.369-1.723-2.092-7.63-9.6-10.708-14.4-5.046-7.877-11.323-28.923 5.17-37.538C83.323 4.882 99.2 21.62 102.769 26.05c3.077 3.815 9.354 12.185 9.846 13.17.739 1.353 1.231.122 1.231.122s4.308-15.507 8.123-22.646c6.523-12.43 20.185-18.461 32-16.246 22.769 4.062 23.631 26.708 21.785 35.077zm-23.016-18.092c-12.8-3.939-20.676 5.538-24.369 17.477-2.954 9.6-3.569 12.184-5.292 17.23-2.462 7.016-8.369 7.631-12.923 2.093-5.292-6.4-12.185-15.754-16.123-20.308-5.17-6.03-17.6-11.077-23.877-3.323-9.477 11.692 3.077 24.861 9.723 32.738 4.554 5.539 10.215 9.354 8.37 12.554-.616 1.23-2.093 1.6-4.062 1.6-4.677 0-19.939-4.184-23.508-4.923-3.077-.615-5.292-.37-6.154 1.846-.985 2.708 2.83 10.462 12.8 15.631 9.846 5.046 25.846 7.63 27.446 8 5.785 1.23 4.677 4.061 3.323 5.538-1.353 1.477-2.954 2.339-2.584 3.816.861 3.692 8.738 4.431 13.415 5.169 4.554.738 10.462 1.108 14.646-.492 4.062-1.6 4.308-3.816 7.016-4.923 3.692-1.477 5.046-.123 13.046 1.353 5.169.985 14.154-.246 19.2-1.846 9.354-3.077 13.169-6.03 13.169-7.507 0-1.108-1.6-1.6-3.323-1.847-1.969-.246-8.739-1.353-10.954-2.83-2.338-1.477-.615-4.062 4.185-6.031 4.677-1.846 19.815-8.123 25.6-13.292 5.661-5.047 11.077-13.539 6.277-18.462-4.677-4.923-13.047.123-17.6 2.215-6.031 2.831-15.877 7.877-19.2 8.616-2.954.615-8.37.492-5.908-6.154 3.2-8.246 4.677-13.292 6.646-18.215 2.462-6.031 6.031-21.17-8.985-25.723z\" fill=\"url(#a)\"/></g><defs><pattern id=\"a\" patternContentUnits=\"userSpaceOnUse\" width=\"178\" height=\"119\" patternUnits=\"userSpaceOnUse\" x=\"38\"><use xlink:href=\"#b\"/></pattern><image id=\"b\" width=\"178\" height=\"119\" xlink:href=\"https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/natura-b-official-embed-image-0.png\"/></defs></svg>",
                    "width": 256,
                    "height": 192
                }
            },
            "custom": {
                "a": {
                    "file": "<svg width=\"256\" height=\"55\" viewBox=\"0 0 256 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M98.111 22.52c10.461 0 15.26 6.523 15.26 12.922v13.906h-6.645V35.442c0-3.938-2.339-10.337-8.615-10.337-6.399 0-8.614 6.399-8.614 10.337v13.906h-6.522V35.442c-.123-6.4 4.676-12.922 15.136-12.922zM188.686 49.717c-10.461 0-15.261-6.522-15.261-12.921V23.013h6.522v13.905c0 3.939 2.339 10.338 8.616 10.338 6.398 0 8.614-6.4 8.614-10.337V23.013h6.522v13.905c.123 6.277-4.676 12.799-15.013 12.799zM139.952 47.379c-1.353 1.107-3.199 1.969-5.291 2.215-6.645.984-15.875-3.323-16.244-12.922-.37-9.844 9.353-14.029 15.752-13.782 10.706.246 14.521 8.368 14.521 12.921v13.537h-6.646V35.934c0-2.953-1.354-10.46-8.122-10.583-6.644-.123-8.737 6.03-8.86 10.583 0 2.954.616 10.091 8.245 10.583 2.339.123 5.66-.492 6.522-1.353v2.215h.123zM169.364 53.163c-.861.369-3.322.861-6.03.123-3.077-.739-8.245-2.215-8.245-12.799V11.2h6.645v11.567h6.154v4.308h-6.154s.123 8.245 0 14.89c-.123 5.907 1.723 8 2.954 8.614 1.6.862 4.308.493 4.554.247v2.338h.122zM210.097 34.58c0-6.522 3.323-11.075 9.354-11.69 4.183-.37 5.66.369 5.66.369v2.584s-2.215-.615-4.677.123c-2.706.862-3.814 4.923-3.814 6.276v17.229h-6.523v-14.89zM247.263 47.379c-1.354 1.107-3.2 1.969-5.293 2.215-6.644.984-15.874-3.323-16.243-12.922-.369-9.844 9.352-14.029 15.751-13.782C252.185 23.136 256 31.258 256 35.81v13.537h-6.645V35.934c0-2.953-1.354-10.46-8.123-10.583-6.645-.123-8.737 6.03-8.86 10.583 0 2.954.615 10.091 8.246 10.583 2.337.123 5.66-.492 6.522-1.353v2.215h.123zM35.965 23.628c.738-2.215 1.107-3.446 2.461-7.753 1.6-5.415 5.292-9.722 11.076-7.876 6.768 2.092 5.168 8.86 4.06 11.691-.86 2.215-1.599 4.553-3.076 8.245-1.107 2.954 1.354 3.077 2.708 2.83 1.476-.369 5.907-2.584 8.737-3.937 2.092-.985 5.907-3.2 8-.985 2.214 2.215-.247 6.03-2.831 8.368-2.585 2.338-9.476 5.169-11.568 6.03-2.092.862-2.954 2.092-1.846 2.708.984.615 4.061 1.23 5.045 1.23.739.123 1.477.246 1.477.862 0 .615-1.723 1.969-5.907 3.446-2.215.738-6.4 1.23-8.737.86-3.692-.614-4.184-1.23-5.907-.614-1.23.492-1.354 1.476-3.2 2.215-1.846.738-4.553.615-6.645.246-2.092-.37-5.661-.739-6.03-2.338-.123-.616.615-1.108 1.23-1.723.616-.616 1.108-1.97-1.476-2.462-1.108-.369-8.369-1.6-12.799-3.814-4.553-2.339-6.276-5.784-5.784-7.015.37-.984 1.354-1.108 2.83-.861 1.6.246 8.492 2.215 10.584 2.215.861 0 1.477-.123 1.846-.739.861-1.476-1.723-3.2-3.815-5.66-2.953-3.57-8.737-9.476-4.43-14.768 2.83-3.446 8.491-1.23 10.83 1.477 1.845 2.092 4.922 6.276 7.26 9.23.985 1.107 1.969 1.722 2.953 1.722 1.231-.246 2.338-1.107 2.954-2.83zm-.492-16.121c-1.723 3.2-3.692 10.214-3.692 10.214s-.123.492-.492-.123c-.247-.37-3.077-4.184-4.43-5.907-1.6-1.97-8.861-9.599-17.106-5.292-7.507 3.938-4.677 13.414-2.338 16.983 1.353 2.215 4.06 5.538 4.799 6.522.123.123.123.246-.123.123-.615-.123-2.338-.615-5.415-1.354-2.707-.738-5.415-.615-6.153.616-.615.861-.861 2.215.246 4.184 2.215 3.938 8.245 10.214 18.213 12.183.246 0 .123.246 0 .492-.615 1.108-.246 1.97.123 2.585 1.477 1.723 3.077 2.46 9.722 3.568 9.107 1.6 12.43-1.476 12.799-1.969h.123c1.477.37 7.26 1.723 14.152-1.23 6.4-2.707 8.86-5.169 8.86-6.646 0-1.353-3.322-1.23-4.307-1.476-.246-.123-.246-.246 0-.37.492-.246 1.6-.738 2.462-1.23.984-.492 10.214-5.169 12.06-13.045s-5.292-7.999-9.23-6.276c-3.815 1.6-7.507 3.446-8.368 3.815-.123 0-.123 0-.123-.123.369-.861 1.722-4.43 2.46-7.63.862-3.692.493-14.029-9.721-15.875A11.039 11.039 0 0 0 47.779 0c-4.677 0-9.722 2.707-12.306 7.507z\" fill=\"#000\"/></svg>",
                    "width": 256,
                    "height": 55
                },
                "b": {
                    "file": "<svg width=\"256\" height=\"192\" viewBox=\"0 0 256 192\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.523 145.558c15.385 0 22.523 9.723 22.523 19.077v20.677h-9.723v-20.677c0-5.908-3.446-15.385-12.8-15.385-9.477 0-12.8 9.477-12.8 15.385v20.677H0v-20.677c0-9.354 7.138-19.077 22.523-19.077zM156.431 185.927c-15.385 0-22.523-9.723-22.523-19.077v-20.676h9.723v20.676c0 5.908 3.446 15.385 12.8 15.385 9.354 0 12.8-9.477 12.8-15.385v-20.676h9.723v20.676c0 9.354-7.139 19.077-22.523 19.077zM84.308 182.481c-2.093 1.6-4.677 2.831-7.877 3.323-9.846 1.6-23.508-4.923-24-19.2-.492-14.646 13.908-20.8 23.261-20.554 15.877.37 21.539 12.431 21.539 19.2v20.062h-9.846v-19.938c0-4.308-1.97-15.508-12.062-15.754-9.846-.246-13.046 8.861-13.046 15.63 0 4.308.985 15.016 12.308 15.631 3.446.246 8.369-.738 9.723-1.969v3.569zM127.877 191.097c-1.354.492-4.923 1.23-8.985.246-4.554-1.231-12.184-3.2-12.184-18.954v-43.446h9.846v17.231h8.984v6.03h-8.984s.246 12.185 0 22.031c-.246 8.739 2.461 11.815 4.431 12.8 2.338 1.231 6.276.739 6.769.492v3.57h.123zM188.062 163.404c0-9.6 5.046-16.492 13.784-17.354 6.154-.615 8.492.493 8.492.493v3.938s-3.2-.861-6.892.123c-4.061 1.231-5.538 7.262-5.538 9.354v25.6h-9.846v-22.154zM243.077 182.481c-2.092 1.6-4.677 2.831-7.877 3.323-9.846 1.6-23.508-4.923-24-19.2-.492-14.646 13.908-20.8 23.262-20.554 15.876.37 21.538 12.431 21.538 19.2v20.062h-9.723v-19.938c0-4.308-1.969-15.508-12.062-15.754-9.846-.246-13.046 8.861-13.046 15.63 0 4.308.985 15.016 12.308 15.631 3.446.246 8.369-.738 9.723-1.969v3.569h-.123zM175.754 35.528c-1.6 7.261-4.677 15.015-5.539 16.985-.123.369 0 .369.247.246 1.846-.862 9.846-4.8 18.338-8.493 8.492-3.569 24.369-3.569 20.308 14.031-4.062 17.477-24.616 27.816-26.708 28.923-1.969.985-4.431 2.093-5.415 2.708-.37.246-.616.492.123.738 2.215.616 9.477.123 9.477 3.2-.123 3.323-5.416 8.739-19.57 14.77-15.384 6.523-28.061 3.569-31.261 2.83-.123 0-.123 0-.246.123-.862.862-8 7.754-28.185 4.308-14.523-2.461-18.092-3.938-21.415-7.877-.985-1.107-1.6-3.2-.37-5.661.37-.616.37-.985-.123-1.108-21.907-4.554-35.2-18.339-40.123-27.077-2.461-4.43-1.723-7.385-.492-9.23 1.723-2.585 7.63-2.832 13.661-1.355 6.77 1.724 10.462 2.708 11.816 3.077.492.123.492 0 .246-.369-1.723-2.092-7.63-9.6-10.708-14.4-5.046-7.877-11.323-28.923 5.17-37.538C83.322 4.882 99.2 21.62 102.768 26.05c3.077 3.815 9.354 12.185 9.846 13.17.739 1.353 1.231.122 1.231.122s4.308-15.507 8.123-22.646c6.523-12.43 20.185-18.461 32-16.246 22.769 4.062 23.631 26.708 21.785 35.077zm-23.016-18.092c-12.8-3.939-20.676 5.538-24.369 17.477-2.954 9.6-3.569 12.184-5.292 17.23-2.462 7.016-8.369 7.631-12.923 2.093-5.293-6.4-12.185-15.754-16.123-20.308-5.17-6.03-17.6-11.077-23.877-3.323-9.477 11.692 3.077 24.861 9.723 32.738 4.554 5.539 10.215 9.354 8.37 12.554-.616 1.23-2.093 1.6-4.063 1.6-4.676 0-19.938-4.184-23.507-4.923-3.077-.615-5.292-.37-6.154 1.846-.985 2.708 2.83 10.462 12.8 15.631 9.846 5.046 25.846 7.63 27.446 8 5.785 1.23 4.677 4.061 3.323 5.538-1.354 1.477-2.954 2.339-2.584 3.816.861 3.692 8.738 4.431 13.415 5.169 4.554.738 10.462 1.108 14.646-.492 4.062-1.6 4.308-3.816 7.016-4.923 3.692-1.477 5.046-.123 13.046 1.353 5.169.985 14.154-.246 19.2-1.846 9.354-3.077 13.169-6.03 13.169-7.507 0-1.108-1.6-1.6-3.323-1.847-1.969-.246-8.739-1.353-10.954-2.83-2.338-1.477-.615-4.062 4.185-6.031 4.677-1.846 19.815-8.123 25.6-13.292 5.661-5.047 11.077-13.539 6.277-18.462-4.677-4.923-13.047.123-17.6 2.215-6.031 2.831-15.877 7.877-19.2 8.616-2.954.615-8.37.492-5.908-6.154 3.2-8.246 4.677-13.292 6.646-18.215 2.462-6.031 6.031-21.17-8.985-25.723z\" fill=\"#000\"/></svg>",
                    "width": 256,
                    "height": 192
                }
            }
        }
    },
    "elevation": {
        "none": "none",
        "micro": "0 1px 1px 0 rgba(0, 0, 0, 0.14)",
        "tiny": "0 2px 2px 0 rgba(0, 0, 0, 0.14)",
        "small": "0 3px 4px 0 rgba(0, 0, 0, 0.14)",
        "medium": "0 4px 5px 0 rgba(0, 0, 0, 0.14)",
        "large": "0 6px 10px 0 rgba(0, 0, 0, 0.14)",
        "largeX": "0 8px 10px 0 rgba(0, 0, 0, 0.14)",
        "largeXX": "0 9px 12px 0 rgba(0, 0, 0, 0.14)",
        "huge": "0 12px 17px 0 rgba(0, 0, 0, 0.14)",
        "hugeX": "0 16px 24px 0 rgba(0, 0, 0, 0.14)",
        "hugeXX": "0 24px 38px 0 rgba(0, 0, 0, 0.14)"
    }
};
//# sourceMappingURL=theme_natura_v2_mock_dark.js.map