"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultoriaDeBeleza_dark_full_theme_pt = exports.consultoriaDeBeleza_dark_full_theme = void 0;
const asset_1 = require("./asset");
const consultoriaDeBeleza_dark_controlls = {
    color: {
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
        "primary": "#F6BE00",
        "onPrimary": "#000000",
        "primaryLight": "#F9D24D",
        "onPrimaryLight": "#000000",
        "primaryLightest": "#FBE599",
        "onPrimaryLightest": "#000000",
        "primaryDark": "#C59800",
        "onPrimaryDark": "#FFFFFF",
        "primaryDarkest": "#947200",
        "onPrimaryDarkest": "#FFFFFF",
        "secondary": "#9F81FD",
        "onSecondary": "#000000",
        "secondaryLight": "#BCA7FE",
        "onSecondaryLight": "#000000",
        "secondarylightest": "#D9CDFE",
        "onSecondarylightest": "#000000",
        "secondaryDark": "#7F67CA",
        "onSecondaryDark": "#000000",
        "secondaryDarkest": "#5F4D98",
        "onSecondaryDarkest": "#FFFFFF",
        "background": "#121212",
        "onBackground": "#FFFFFF",
        "surface": "#333333",
        "onSurface": "#FFFFFF",
        "highlight": "#FFFFFF",
        "highEmphasis": "#FAFAFA",
        "mediumEmphasis": "#BBBBBB",
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
            "branding": "Roboto",
            "code": "Roboto Mono"
        },
        "fontWeight": {
            "regular": 400,
            "medium": 500
        },
        "display": {
            "fontFamily": "Roboto",
            "fontWeight": 700
        },
        "headline": {
            "fontFamily": "Roboto",
            "fontWeight": 500
        },
        "body": {
            "regular": {
                "fontFamily": "Roboto",
                "fontWeight": 400
            },
            "bold": {
                "fontFamily": "Roboto",
                "fontWeight": 700
            }
        },
        "fallback": {
            "fontFamily": "Arial",
            "fontWeight": 400
        }
    },
};
exports.consultoriaDeBeleza_dark_full_theme = {
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "content": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
            "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
            "fontWeight": 400
        },
        "fallback": {
            "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
            "fontWeight": 400
        },
        "color": {
            "background": consultoriaDeBeleza_dark_controlls.color.primary,
            "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
        }
    },
    "badge": {
        "label": {
            "fontSize": 12,
            "letterSpacing": 0.38,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis,
                "background": consultoriaDeBeleza_dark_controlls.color.primary
            },
            "secondary": {
                "label": consultoriaDeBeleza_dark_controlls.color.highlight,
                "background": consultoriaDeBeleza_dark_controlls.color.secondary
            },
            "success": {
                "label": consultoriaDeBeleza_dark_controlls.color.onSuccess,
                "background": consultoriaDeBeleza_dark_controlls.color.success,
            },
            "alert": {
                "label": consultoriaDeBeleza_dark_controlls.color.onAlert,
                "background": consultoriaDeBeleza_dark_controlls.color.alert,
            }
        }
    },
    "button": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 1.23,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 500
            }
        },
        "borderRadius": 4,
        "contained": {
            "color": {
                "enable": {
                    "background": consultoriaDeBeleza_dark_controlls.color.primary,
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#bbbbbb",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "hover": {
                    "background": consultoriaDeBeleza_dark_controlls.color.primaryDark,
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "focus": {
                    "background": consultoriaDeBeleza_dark_controlls.color.primaryDarkest,
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                }
            }
        },
        "outlined": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00",
                    "border": consultoriaDeBeleza_dark_controlls.color.primary,
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#FFFFFF00",
                    "border": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                    "label": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis
                },
                "hover": {
                    "background": "#f1f3f5",
                    "border": consultoriaDeBeleza_dark_controlls.color.primary,
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "focus": {
                    "background": "#e9ecef",
                    "border": consultoriaDeBeleza_dark_controlls.color.primary,
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                }
            }
        },
        "text": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#FFFFFF00",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis
                },
                "hover": {
                    "background": "#f1f3f5",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                },
                "focus": {
                    "background": "#e9ecef",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
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
            "background": consultoriaDeBeleza_dark_controlls.color.surface
        }
    },
    "checkbox": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 2
    },
    "counter": {
        "label": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 14,
            "letterSpacing": 0.11,
            "lineHeight": 1.25
        },
        "content": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "body": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 4,
        "color": {
            "background": consultoriaDeBeleza_dark_controlls.color.surface,
            "title": consultoriaDeBeleza_dark_controlls.color.highlight
        }
    },
    "divider": {
        "color": {
            "background": consultoriaDeBeleza_dark_controlls.color.lowEmphasis
        }
    },
    "expansionPanel": {
        "title": {
            "fontSize": 16,
            "letterSpacing": 0.13,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                    "background": consultoriaDeBeleza_dark_controlls.color.surface
                },
                "disable": {
                    "background": consultoriaDeBeleza_dark_controlls.color.lowEmphasis
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
                    "background": consultoriaDeBeleza_dark_controlls.color.highlight
                },
                "disable": {
                    "background": consultoriaDeBeleza_dark_controlls.color.highlight
                },
                "hover": {
                    "background": consultoriaDeBeleza_dark_controlls.color.highlight
                },
                "focus": {
                    "background": consultoriaDeBeleza_dark_controlls.color.highlight
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "color": {
            "label": {
                "enable": {
                    "default": consultoriaDeBeleza_dark_controlls.color.link,
                    "light": consultoriaDeBeleza_dark_controlls.color.lowEmphasis
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
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 500
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            },
            "subtitle": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            },
            "item": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
            "stroke": consultoriaDeBeleza_dark_controlls.color.primary,
            "layer": consultoriaDeBeleza_dark_controlls.color.surface,
        }
    },
    "radioButton": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 12,
        "color": {
            "select": {
                "border": consultoriaDeBeleza_dark_controlls.color.primary,
                "content": consultoriaDeBeleza_dark_controlls.color.primary
            },
            "unselect": {
                "border": consultoriaDeBeleza_dark_controlls.color.highlight,
                "content": consultoriaDeBeleza_dark_controlls.color.highlight
            },
            "disable": {
                "border": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                "content": consultoriaDeBeleza_dark_controlls.color.lowEmphasis
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
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "contained": {
            "color": {
                "enable": {
                    "primary": {
                        "background": consultoriaDeBeleza_dark_controlls.color.primary,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": consultoriaDeBeleza_dark_controlls.color.surface,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    }
                },
                "disable": {
                    "primary": {
                        "background": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis
                    },
                    "neutral": {
                        "background": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis
                    }
                },
                "hover": {
                    "primary": {
                        "background": consultoriaDeBeleza_dark_controlls.color.primaryDark,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#f1f3f5",
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    }
                },
                "focus": {
                    "primary": {
                        "background": consultoriaDeBeleza_dark_controlls.color.primaryDarkest,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#e9ecef",
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    }
                }
            }
        },
        "outlined": {
            "color": {
                "enable": {
                    "primary": {
                        "background": "#FFFFFF00",
                        "border": consultoriaDeBeleza_dark_controlls.color.primary,
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#FFFFFF00",
                        "border": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    }
                },
                "disable": {
                    "primary": {
                        "background": consultoriaDeBeleza_dark_controlls.color.highlight,
                        "border": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                        "label": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                    },
                    "neutral": {
                        "background": consultoriaDeBeleza_dark_controlls.color.highlight,
                        "border": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                        "label": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
                    }
                },
                "hover": {
                    "primary": {
                        "background": "#f1f3f5",
                        "border": consultoriaDeBeleza_dark_controlls.color.primaryDark,
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#f1f3f5",
                        "border": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis,
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    }
                },
                "focus": {
                    "primary": {
                        "background": "#e9ecef",
                        "border": consultoriaDeBeleza_dark_controlls.color.primaryDark,
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#e9ecef",
                        "border": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis,
                        "label": consultoriaDeBeleza_dark_controlls.color.highEmphasis
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
                "primary": consultoriaDeBeleza_dark_controlls.color.primary,
                "secondary": consultoriaDeBeleza_dark_controlls.color.secondary,
                "success": consultoriaDeBeleza_dark_controlls.color.success,
                "alert": consultoriaDeBeleza_dark_controlls.color.alert,
                "warning": consultoriaDeBeleza_dark_controlls.color.warning,
                "link": consultoriaDeBeleza_dark_controlls.color.link
            },
            "label": {
                "primary": consultoriaDeBeleza_dark_controlls.color.highEmphasis,
                "secondary": consultoriaDeBeleza_dark_controlls.color.highlight,
                "success": consultoriaDeBeleza_dark_controlls.color.onSuccess,
                "alert": consultoriaDeBeleza_dark_controlls.color.onAlert,
                "warning": consultoriaDeBeleza_dark_controlls.color.onWarning,
                "link": consultoriaDeBeleza_dark_controlls.color.onLink
            }
        }
    },
    "textField": {
        "label": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 14,
            "letterSpacing": 0.11,
            "lineHeight": 1.5
        },
        "content": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.25
        },
        "helperText": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
            "primary": consultoriaDeBeleza_dark_controlls.typography.fontFamily.primary,
            "secondary": consultoriaDeBeleza_dark_controlls.typography.fontFamily.secondary,
            "branding": consultoriaDeBeleza_dark_controlls.typography.fontFamily.branding,
            "code": consultoriaDeBeleza_dark_controlls.typography.fontFamily.code
        },
        "fontWeight": {
            "regular": 400,
            "medium": 500
        },
        "display": {
            "fontFamily": consultoriaDeBeleza_dark_controlls.typography.display.fontFamily,
            "fontWeight": 700
        },
        "headline": {
            "fontFamily": consultoriaDeBeleza_dark_controlls.typography.headline.fontFamily,
            "fontWeight": 500
        },
        "body": {
            "regular": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.body.regular.fontFamily,
                "fontWeight": 400
            },
            "bold": {
                "fontFamily": consultoriaDeBeleza_dark_controlls.typography.body.bold.fontFamily,
                "fontWeight": 700
            }
        },
        "fallback": {
            "fontFamily": consultoriaDeBeleza_dark_controlls.typography.fallback.fontFamily,
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
        "primary": consultoriaDeBeleza_dark_controlls.color.primary,
        "onPrimary": consultoriaDeBeleza_dark_controlls.color.onPrimary,
        "primaryLight": consultoriaDeBeleza_dark_controlls.color.primaryLight,
        "onPrimaryLight": consultoriaDeBeleza_dark_controlls.color.onPrimaryLight,
        "primaryLightest": consultoriaDeBeleza_dark_controlls.color.primaryLightest,
        "onPrimaryLightest": consultoriaDeBeleza_dark_controlls.color.onPrimaryLightest,
        "primaryDark": consultoriaDeBeleza_dark_controlls.color.primaryDark,
        "onPrimaryDark": consultoriaDeBeleza_dark_controlls.color.onPrimaryDark,
        "primaryDarkest": consultoriaDeBeleza_dark_controlls.color.primaryDarkest,
        "onPrimaryDarkest": consultoriaDeBeleza_dark_controlls.color.onPrimaryDarkest,
        "secondary": consultoriaDeBeleza_dark_controlls.color.secondary,
        "onSecondary": consultoriaDeBeleza_dark_controlls.color.onSecondary,
        "secondaryLight": consultoriaDeBeleza_dark_controlls.color.secondaryLight,
        "onSecondaryLight": consultoriaDeBeleza_dark_controlls.color.onSecondaryLight,
        "secondaryDark": consultoriaDeBeleza_dark_controlls.color.secondaryDark,
        "onSecondaryDark": consultoriaDeBeleza_dark_controlls.color.onSecondaryDark,
        "secondaryDarkest": consultoriaDeBeleza_dark_controlls.color.secondaryDarkest,
        "onSecondaryDarkest": consultoriaDeBeleza_dark_controlls.color.onSecondaryDarkest,
        "background": consultoriaDeBeleza_dark_controlls.color.background,
        "onBackground": consultoriaDeBeleza_dark_controlls.color.onBackground,
        "surface": consultoriaDeBeleza_dark_controlls.color.surface,
        "onSurface": consultoriaDeBeleza_dark_controlls.color.onSurface,
        "highlight": consultoriaDeBeleza_dark_controlls.color.highlight,
        "highEmphasis": consultoriaDeBeleza_dark_controlls.color.highEmphasis,
        "mediumEmphasis": consultoriaDeBeleza_dark_controlls.color.mediumEmphasis,
        "lowEmphasis": consultoriaDeBeleza_dark_controlls.color.lowEmphasis,
        "link": consultoriaDeBeleza_dark_controlls.color.link,
        "onLink": consultoriaDeBeleza_dark_controlls.color.onLink,
        "success": consultoriaDeBeleza_dark_controlls.color.success,
        "onSuccess": consultoriaDeBeleza_dark_controlls.color.onSuccess,
        "warning": consultoriaDeBeleza_dark_controlls.color.warning,
        "onWarning": consultoriaDeBeleza_dark_controlls.color.onWarning,
        "alert": consultoriaDeBeleza_dark_controlls.color.alert,
        "onAlert": consultoriaDeBeleza_dark_controlls.color.onAlert,
    },
    "asset": asset_1.asset_es,
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
exports.consultoriaDeBeleza_dark_full_theme_pt = {
    ...exports.consultoriaDeBeleza_dark_full_theme,
    asset: asset_1.asset_pt,
};
//# sourceMappingURL=theme_consultoriaDeBeleza_mock_dark.js.map