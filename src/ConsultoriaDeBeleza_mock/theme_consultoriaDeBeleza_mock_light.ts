const consultoriaDeBeleza_light_controlls = {
    color:{
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
        "background": "#fafafa",
        "onBackground": "#333333",
        "surface": "#ffffff",
        "onSurface": "#333333",
        "highlight": "#000000",
        "highEmphasis": "#333333",
        "mediumEmphasis": "#777777",
        "lowEmphasis": "#bbbbbb",
        "link": "#227bbd",
        "onLink": "#ffffff",
        "success": "#569a32",
        "onSuccess": "#ffffff",
        "warning": "#fcc433",
        "onWarning": "#000000",    
        "alert": "#e74627",
        "onAlert": "#ffffff"
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
    
}

export const consultoriaDeBeleza_light_full_theme = 
{
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "content": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
            "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
            "fontWeight": 400
        },
        "fallback": {
            "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
            "fontWeight": 400
        },
        "color": {
            "background": consultoriaDeBeleza_light_controlls.color.primary,
            "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
        }
    },
    "badge": {
        "label": {
            "fontSize": 12,
            "letterSpacing": 0.38,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "label": consultoriaDeBeleza_light_controlls.color.highEmphasis,
                "background": consultoriaDeBeleza_light_controlls.color.primary
            },
            "secondary": {
                "label": consultoriaDeBeleza_light_controlls.color.highlight,
                "background": consultoriaDeBeleza_light_controlls.color.secondary
            },
            "success": {
                "label": consultoriaDeBeleza_light_controlls.color.onSuccess,
                "background": consultoriaDeBeleza_light_controlls.color.success,
            },
            "alert": {
                "label": consultoriaDeBeleza_light_controlls.color.onAlert,
                "background": consultoriaDeBeleza_light_controlls.color.alert,
            }
        }
    },
    "button": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 1.23,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 500
            }
        },
        "borderRadius": 4,
        "contained": {
            "color": {
                "enable": {
                    "background": consultoriaDeBeleza_light_controlls.color.primary,
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#bbbbbb",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "hover": {
                    "background": consultoriaDeBeleza_light_controlls.color.primaryDark,
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "focus": {
                    "background": consultoriaDeBeleza_light_controlls.color.primaryDarkest,
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                }
            }
        },
        "outlined": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00",
                    "border": consultoriaDeBeleza_light_controlls.color.primary,
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#FFFFFF00",
                    "border": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                    "label": consultoriaDeBeleza_light_controlls.color.mediumEmphasis
                },
                "hover": {
                    "background": "#f1f3f5",
                    "border": consultoriaDeBeleza_light_controlls.color.primary,
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "focus": {
                    "background": "#e9ecef",
                    "border": consultoriaDeBeleza_light_controlls.color.primary,
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                }
            }
        },
        "text": {
            "color": {
                "enable": {
                    "background": "#FFFFFF00",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "disable": {
                    "background": "#FFFFFF00",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.mediumEmphasis
                },
                "hover": {
                    "background": "#f1f3f5",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                },
                "focus": {
                    "background": "#e9ecef",
                    "border": "#FFFFFF00",
                    "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
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
            "background": consultoriaDeBeleza_light_controlls.color.surface
        }
    },
    "checkbox": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 2
    },
    "counter": {
        "label": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 14,
            "letterSpacing": 0.11,
            "lineHeight": 1.25
        },
        "content": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "body": {
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 4,
        "color": {
            "background": consultoriaDeBeleza_light_controlls.color.surface,
            "title": consultoriaDeBeleza_light_controlls.color.highlight
        }
    },
    "divider": {
        "color": {
            "background": consultoriaDeBeleza_light_controlls.color.lowEmphasis
        }
    },
    "expansionPanel": {
        "title": {
            "fontSize": 16,
            "letterSpacing": 0.13,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                    "background": consultoriaDeBeleza_light_controlls.color.surface
                },
                "disable": {
                    "background": consultoriaDeBeleza_light_controlls.color.lowEmphasis
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
                    "background": consultoriaDeBeleza_light_controlls.color.highlight
                },
                "disable": {
                    "background": consultoriaDeBeleza_light_controlls.color.highlight
                },
                "hover": {
                    "background": consultoriaDeBeleza_light_controlls.color.highlight
                },
                "focus": {
                    "background": consultoriaDeBeleza_light_controlls.color.highlight
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "color": {
            "label": {
                "enable": {
                    "default": consultoriaDeBeleza_light_controlls.color.link,
                    "light": consultoriaDeBeleza_light_controlls.color.lowEmphasis
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
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                    "fontWeight": 500
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            },
            "subtitle": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                    "fontWeight": 400
                }
            },
            "item": {
                "fontSize": 14,
                "letterSpacing": 0.22,
                "lineHeight": 1.5,
                "primary": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
            "stroke": consultoriaDeBeleza_light_controlls.color.primary,
            "layer": consultoriaDeBeleza_light_controlls.color.surface,
        }
    },
    "radioButton": {
        "label": {
            "fontSize": 14,
            "letterSpacing": 0.22,
            "lineHeight": 1.5,
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "borderRadius": 12,
        "color": {
            "select": {
                "border": consultoriaDeBeleza_light_controlls.color.primary,
                "content": consultoriaDeBeleza_light_controlls.color.primary
            },
            "unselect": {
                "border": consultoriaDeBeleza_light_controlls.color.highlight,
                "content": consultoriaDeBeleza_light_controlls.color.highlight
            },
            "disable": {
                "border": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                "content": consultoriaDeBeleza_light_controlls.color.lowEmphasis
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
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                    "fontWeight": 400
                },
                "fallback": {
                    "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            }
        },
        "contained": {
            "color": {
                "enable": {
                    "primary": {
                        "background": consultoriaDeBeleza_light_controlls.color.primary,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": consultoriaDeBeleza_light_controlls.color.surface,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    }
                },
                "disable": {
                    "primary": {
                        "background": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.mediumEmphasis
                    },
                    "neutral": {
                        "background": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.mediumEmphasis
                    }
                },
                "hover": {
                    "primary": {
                        "background": consultoriaDeBeleza_light_controlls.color.primaryDark,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#f1f3f5",
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    }
                },
                "focus": {
                    "primary": {
                        "background": consultoriaDeBeleza_light_controlls.color.primaryDarkest,
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#e9ecef",
                        "border": "#FFFFFF00",
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    }
                }
            }
        },
        "outlined": {
            "color": {
                "enable": {
                    "primary": {
                        "background": "#FFFFFF00",
                        "border": consultoriaDeBeleza_light_controlls.color.primary,
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#FFFFFF00",
                        "border": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    }
                },
                "disable": {
                    "primary": {
                        "background": consultoriaDeBeleza_light_controlls.color.highlight,
                        "border": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                        "label": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                    },
                    "neutral": {
                        "background": consultoriaDeBeleza_light_controlls.color.highlight,
                        "border": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                        "label": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
                    }
                },
                "hover": {
                    "primary": {
                        "background": "#f1f3f5",
                        "border": consultoriaDeBeleza_light_controlls.color.primaryDark,
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#f1f3f5",
                        "border": consultoriaDeBeleza_light_controlls.color.mediumEmphasis,
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    }
                },
                "focus": {
                    "primary": {
                        "background": "#e9ecef",
                        "border": consultoriaDeBeleza_light_controlls.color.primaryDark,
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
                    },
                    "neutral": {
                        "background": "#e9ecef",
                        "border": consultoriaDeBeleza_light_controlls.color.mediumEmphasis,
                        "label": consultoriaDeBeleza_light_controlls.color.highEmphasis
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
                "primary": consultoriaDeBeleza_light_controlls.color.primary,
                "secondary": consultoriaDeBeleza_light_controlls.color.secondary,
                "success": consultoriaDeBeleza_light_controlls.color.success,
                "alert": consultoriaDeBeleza_light_controlls.color.alert,
                "warning": consultoriaDeBeleza_light_controlls.color.warning,
                "link": consultoriaDeBeleza_light_controlls.color.link
            },
            "label": {
                "primary": consultoriaDeBeleza_light_controlls.color.highEmphasis,
                "secondary": consultoriaDeBeleza_light_controlls.color.highlight,
                "success": consultoriaDeBeleza_light_controlls.color.onSuccess,
                "alert": consultoriaDeBeleza_light_controlls.color.onAlert,
                "warning": consultoriaDeBeleza_light_controlls.color.onWarning,
                "link": consultoriaDeBeleza_light_controlls.color.onLink
            }
        }
    },
    "textField": {
        "label": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 500
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 14,
            "letterSpacing": 0.11,
            "lineHeight": 1.5
        },
        "content": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
                "fontWeight": 400
            },
            "fontSize": 16,
            "letterSpacing": 0.51,
            "lineHeight": 1.25
        },
        "helperText": {
            "primary": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
                "fontWeight": 400
            },
            "fallback": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
            "primary": consultoriaDeBeleza_light_controlls.typography.fontFamily.primary,
            "secondary": consultoriaDeBeleza_light_controlls.typography.fontFamily.secondary,
            "branding": consultoriaDeBeleza_light_controlls.typography.fontFamily.branding,
            "code": consultoriaDeBeleza_light_controlls.typography.fontFamily.code
        },
        "fontWeight": {
            "regular": 400,
            "medium": 500
        },
        "display": {
            "fontFamily": consultoriaDeBeleza_light_controlls.typography.display.fontFamily,
            "fontWeight": 700
        },
        "headline": {
            "fontFamily": consultoriaDeBeleza_light_controlls.typography.headline.fontFamily,
            "fontWeight": 500
        },
        "body": {
            "regular": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.body.regular.fontFamily,
                "fontWeight": 400
            },
            "bold": {
                "fontFamily": consultoriaDeBeleza_light_controlls.typography.body.bold.fontFamily,
                "fontWeight": 700
            }
        },
        "fallback": {
            "fontFamily": consultoriaDeBeleza_light_controlls.typography.fallback.fontFamily,
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
        "primary": consultoriaDeBeleza_light_controlls.color.primary,
        "onPrimary": consultoriaDeBeleza_light_controlls.color.onPrimary,
        "primaryLight": consultoriaDeBeleza_light_controlls.color.primaryLight,
        "onPrimaryLight": consultoriaDeBeleza_light_controlls.color.onPrimaryLight,
        "primaryLightest": consultoriaDeBeleza_light_controlls.color.primaryLightest,
        "onPrimaryLightest": consultoriaDeBeleza_light_controlls.color.onPrimaryLightest,
        "primaryDark": consultoriaDeBeleza_light_controlls.color.primaryDark,
        "onPrimaryDark": consultoriaDeBeleza_light_controlls.color.onPrimaryDark,
        "primaryDarkest": consultoriaDeBeleza_light_controlls.color.primaryDarkest,
        "onPrimaryDarkest": consultoriaDeBeleza_light_controlls.color.onPrimaryDarkest,
        "secondary": consultoriaDeBeleza_light_controlls.color.secondary,
        "onSecondary": consultoriaDeBeleza_light_controlls.color.onSecondary,
        "secondaryLight": consultoriaDeBeleza_light_controlls.color.secondaryLight,
        "onSecondaryLight": consultoriaDeBeleza_light_controlls.color.onSecondaryLight,
        "secondaryDark": consultoriaDeBeleza_light_controlls.color.secondaryDark,
        "onSecondaryDark": consultoriaDeBeleza_light_controlls.color.onSecondaryDark,
        "secondaryDarkest": consultoriaDeBeleza_light_controlls.color.secondaryDarkest,
        "onSecondaryDarkest": consultoriaDeBeleza_light_controlls.color.onSecondaryDarkest,
        "background": consultoriaDeBeleza_light_controlls.color.background,
        "onBackground": consultoriaDeBeleza_light_controlls.color.onBackground,
        "surface": consultoriaDeBeleza_light_controlls.color.surface,
        "onSurface": consultoriaDeBeleza_light_controlls.color.onSurface,
        "highlight": consultoriaDeBeleza_light_controlls.color.highlight,
        "highEmphasis": consultoriaDeBeleza_light_controlls.color.highEmphasis,
        "mediumEmphasis": consultoriaDeBeleza_light_controlls.color.mediumEmphasis,
        "lowEmphasis": consultoriaDeBeleza_light_controlls.color.lowEmphasis,
        "link": consultoriaDeBeleza_light_controlls.color.link,
        "onLink": consultoriaDeBeleza_light_controlls.color.onLink,
        "success": consultoriaDeBeleza_light_controlls.color.success,
        "onSuccess": consultoriaDeBeleza_light_controlls.color.onSuccess,
        "warning": consultoriaDeBeleza_light_controlls.color.warning,
        "onWarning": consultoriaDeBeleza_light_controlls.color.onWarning,
        "alert": consultoriaDeBeleza_light_controlls.color.alert,
        "onAlert": consultoriaDeBeleza_light_controlls.color.onAlert,
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
                    "file": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="201.564" height="61.613" viewBox="0 0 201.564 61.613"><defs><style>.a{fill:none;}.b{clip-path:url(#a);}.c{fill:#e5004b;}.d{fill:#d1020a;}.e{fill:#eb6619;}</style><clipPath id="a"><rect class="a" width="201.564" height="61.613"/></clipPath></defs><g class="b"><path d="M79.157,309.349l-5.2-10.873h1.413a1.664,1.664,0,0,1,1.507.957l2.859,6.091,2.837-6.087a1.663,1.663,0,0,1,1.508-.961H85.5l-5.2,10.873Z" transform="translate(-61.491 -248.17)"/><path d="M6.507,298.475H5.338L0,309.348H1.293a1.8,1.8,0,0,0,1.584-.955L4,306.221a7.266,7.266,0,0,1,5.354,3.128h2.5Zm-.58,3.736L7.343,305.2a10.2,10.2,0,0,0-2.455-.8Z" transform="translate(0 -248.169)"/><path d="M256.159,298.474a1.144,1.144,0,0,0-1.144,1.145l.007,5.736-5.678-6.881h-1.684v10.873h1.04a1.144,1.144,0,0,0,1.144-1.145l-.006-5.724,4.655,5.66a3.164,3.164,0,0,0,2.242,1.209h.465V298.474Z" transform="translate(-205.917 -248.168)"/><path d="M161.3,306.434a3.572,3.572,0,0,1-3.567-3.631,3.653,3.653,0,0,1,3.873-3.494,3.569,3.569,0,0,1-.306,7.125m4.089-7.622a5.749,5.749,0,1,0-4.089,9.744,5.786,5.786,0,0,0,4.08-1.657,5.528,5.528,0,0,0,1.71-4.032,5.622,5.622,0,0,0-1.7-4.055" transform="translate(-129.314 -247.098)"/><path d="M14.38,161.771c2.88,0,4.206,1.832,4.206,3.583v3.862H16.777v-3.862c0-1.11-.627-2.887-2.4-2.887-1.739,0-2.382,1.777-2.382,2.887,0,1.089-.011,3.862-.011,3.862H10.17v-3.862c0-1.751,1.342-3.583,4.21-3.583" transform="translate(-8.456 -134.505)"/><path d="M162.886,169.881c-2.891,0-4.214-1.81-4.214-3.562v-3.872h1.821v3.872c0,1.1.622,2.891,2.393,2.891,1.752,0,2.4-1.8,2.4-2.891v-3.872h1.8v3.872c0,1.752-1.323,3.562-4.2,3.562" transform="translate(-131.929 -135.067)"/><path d="M74.258,169.187a2.779,2.779,0,0,1-1.471.608,3.85,3.85,0,0,1-4.5-3.568c-.1-2.745,2.6-3.885,4.36-3.847a3.811,3.811,0,0,1,4.009,3.589v3.752H74.838v-3.727c0-.821-.359-2.891-2.252-2.952-1.84-.055-2.427,1.663-2.442,2.927,0,.814.194,2.819,2.3,2.939a3.787,3.787,0,0,0,1.815-.367Z" transform="translate(-56.776 -135.011)"/><path d="M132.507,154.966a3.016,3.016,0,0,1-1.663.04c-.867-.213-2.283-.627-2.283-3.533v-8.133h1.851v3.241h1.69V147.7h-1.69s.055,2.3,0,4.136c-.029,1.642.456,2.22.831,2.4a1.971,1.971,0,0,0,1.264.076Z" transform="translate(-106.893 -119.182)"/><path d="M218.857,165.4c0-1.821.937-3.081,2.579-3.241a2.848,2.848,0,0,1,1.583.095v.713a2.881,2.881,0,0,0-1.294.034c-.732.249-1.021,1.369-1.021,1.756,0,1.325,0,4.778,0,4.778h-1.846Z" transform="translate(-181.97 -134.789)"/><path d="M250.392,169.185a2.9,2.9,0,0,1-1.475.608,3.846,3.846,0,0,1-4.493-3.568c-.091-2.745,2.593-3.891,4.36-3.847a3.808,3.808,0,0,1,4.01,3.589v3.752h-1.815v-3.727c0-.821-.376-2.891-2.254-2.956-1.838-.051-2.42,1.667-2.42,2.931,0,.814.144,2.811,2.279,2.939a3.718,3.718,0,0,0,1.808-.367Z" transform="translate(-203.226 -135.009)"/><path d="M79.327,3.3c-2.4-.728-3.891,1.028-4.554,3.283-.565,1.8-.68,2.294-.994,3.235-.469,1.308-1.583,1.393-2.425.386C70.369,9.01,69.067,7.242,68.339,6.4c-.96-1.118-3.292-2.07-4.457-.612-1.777,2.2.578,4.664,1.825,6.132.867,1.055,1.891,1.766,1.568,2.357a.836.836,0,0,1-.766.293c-.872-.019-3.727-.8-4.4-.92-.559-.12-.979-.091-1.137.344-.2.5.517,1.961,2.378,2.921A21.636,21.636,0,0,0,68.491,18.4c1.083.23.876.779.606,1.026-.239.264-.538.443-.483.711.169.692,1.638.838,2.524.981a5.24,5.24,0,0,0,2.718-.1c.764-.3.81-.728,1.334-.912.7-.268.935-.044,2.431.249a9.11,9.11,0,0,0,3.6-.367c1.737-.568,2.454-1.14,2.454-1.4,0-.219-.3-.3-.618-.323A7.508,7.508,0,0,1,81,17.723c-.411-.285-.084-.768.762-1.106a21.775,21.775,0,0,0,4.786-2.488c1.07-.945,2.072-2.543,1.19-3.463s-2.463.015-3.3.4a31.457,31.457,0,0,1-3.577,1.612c-.547.135-1.576.1-1.1-1.148.6-1.534.876-2.479,1.243-3.4.458-1.14,1.1-3.971-1.671-4.826m10.545,7.633c-.768,3.262-4.6,5.193-4.972,5.408-.384.19-.855.388-1.023.5-.07.044-.116.089.023.133.409.11,1.766.025,1.743.6-.006.62-1.028,1.635-3.644,2.752a9.254,9.254,0,0,1-5.839.528l-.053.015c-.158.173-1.488,1.447-5.259.8-2.7-.473-3.378-.741-4.009-1.454a.957.957,0,0,1-.04-1.07c.04-.118.053-.184-.021-.209a11.3,11.3,0,0,1-7.508-5.064,1.558,1.558,0,0,1-.07-1.726c.323-.494,1.408-.528,2.539-.249,1.251.344,1.954.506,2.218.572.089.036.1,0,.055-.065-.319-.386-1.429-1.785-2.009-2.682-.926-1.473-2.125-5.4.949-7.025,3.423-1.781,6.415,1.359,7.076,2.18.582.711,1.762,2.287,1.851,2.448.15.253.226.044.226.044a28.98,28.98,0,0,1,1.5-4.225A5.706,5.706,0,0,1,79.582.082c4.21.787,4.368,5.035,4.035,6.594A19.871,19.871,0,0,1,82.592,9.84c-.03.07,0,.08.055.044.323-.15,1.825-.884,3.429-1.572,1.6-.671,4.548-.65,3.8,2.619" transform="translate(-49.037 0)"/><path d="M545.748,55.206a3.76,3.76,0,0,1-1.643.315,4.52,4.52,0,1,1,.012-9.039,4.069,4.069,0,0,1,1.631.3v1.9a3.229,3.229,0,0,0-1.515-.326,2.639,2.639,0,1,0,0,5.277,3.381,3.381,0,0,0,1.515-.3Z" transform="translate(-448.584 -38.647)"/><path d="M585.334,51a4.566,4.566,0,1,1,4.555,4.531A4.424,4.424,0,0,1,585.334,51m7.105,0a2.542,2.542,0,1,0-2.551,2.656A2.529,2.529,0,0,0,592.439,51" transform="translate(-486.679 -38.647)"/><path d="M659.034,46.9V55.7h-.221l-5.836-4.974v4.9h-1.992V46.826h.221l5.824,4.939V46.9Z" transform="translate(-541.265 -38.934)"/><path d="M711.327,55V53.226a2.931,2.931,0,0,0,1.771.582c1.083,0,1.561-.548,1.561-1.083,0-.443-.245-.815-.885-1.13l-.874-.431A2.41,2.41,0,0,1,711.315,49c0-1.456,1.293-2.516,3.32-2.516a3.553,3.553,0,0,1,1.642.315v1.77a2.753,2.753,0,0,0-1.433-.4c-.885,0-1.41.35-1.41.9,0,.361.221.606.757.862l.839.419a2.544,2.544,0,0,1,1.666,2.388c0,1.514-1.083,2.8-3.39,2.8a3.539,3.539,0,0,1-1.98-.536" transform="translate(-591.427 -38.648)"/><path d="M753.815,52.25V47.241h2.038v5.02a1.942,1.942,0,1,0,3.879,0v-5.02h2.038V52.25a3.978,3.978,0,0,1-7.956,0" transform="translate(-626.764 -39.279)"/><path d="M819.531,54.207v1.771h-4.624V47.241h2.038v6.966Z" transform="translate(-677.558 -39.279)"/><path d="M845.808,49.012h-1.945V47.241h5.917v1.771h-1.934v6.966h-2.038Z" transform="translate(-701.634 -39.279)"/><path d="M883.391,51a4.566,4.566,0,1,1,4.555,4.531A4.424,4.424,0,0,1,883.391,51m7.105,0a2.542,2.542,0,1,0-2.551,2.656A2.529,2.529,0,0,0,890.5,51" transform="translate(-734.5 -38.647)"/><path d="M954.19,55.977l-1.351-2.516c-.2.012-.408.023-.629.023a6.226,6.226,0,0,1-1.107-.093v2.586h-2.062V47.241h3.588c2.283,0,3.6,1.118,3.6,2.994a2.881,2.881,0,0,1-1.491,2.679l1.666,3.064Zm-.047-5.638c0-.815-.466-1.316-1.712-1.316H951.1v2.714a5.8,5.8,0,0,0,1.048.082c1.375,0,1.992-.513,1.992-1.479" transform="translate(-789.086 -39.279)"/><rect width="2.027" height="8.736" transform="translate(169.076 7.962)"/><path d="M1031.378,54.638h-3.087L1027.743,56h-2.213l4.182-8.732h.233L1034.126,56h-2.2Zm-1.549-3.927-.967,2.423h1.945Z" transform="translate(-852.683 -39.3)"/><path d="M1112.384,51.621c0,2.715-1.986,4.619-5.1,4.619a9.393,9.393,0,0,1-2.856-.4v-8.6h3.1c2.938,0,4.854,1.869,4.854,4.384m-2.069.047a2.552,2.552,0,0,0-2.75-2.621H1106.4v5.289a9.283,9.283,0,0,0,1.152.082,2.575,2.575,0,0,0,2.762-2.75" transform="translate(-918.282 -39.275)"/><path d="M1166.74,54.212v1.77h-5.913V47.247h5.831v1.77h-3.907V50.6h3.719v1.654h-3.719v1.957Z" transform="translate(-965.176 -39.284)"/><path d="M1001.589,35V33.849l2.879-.6v1.227Z" transform="translate(-832.777 -27.643)"/><path d="M665.573,150.749a8.08,8.08,0,0,0-5.869,2.121q-2.193,2.121-2.192,6.364v19.234q0,4.314,2.051,6.4a8.728,8.728,0,0,0,11.526-.177q2.191-2.262,2.192-6.576v-2.758H668.19v3.253a6.051,6.051,0,0,1-.707,3.147,2.384,2.384,0,0,1-2.192,1.167,2.449,2.449,0,0,1-2.086-.884,4.486,4.486,0,0,1-.672-2.723v-.212a19.854,19.854,0,0,1,.141-2.687,4.945,4.945,0,0,1,.707-1.909,7.093,7.093,0,0,1,1.768-1.838l3.394-2.687a14.638,14.638,0,0,0,3.819-4.208,10.005,10.005,0,0,0,1.273-5.056v-1.485q0-4.384-2.016-6.435t-6.046-2.051m2.758,10.041a9.411,9.411,0,0,1-.636,3.642,8.468,8.468,0,0,1-2.334,3.005l-2.333,1.98a3.2,3.2,0,0,0-.283.261V158.527a4.484,4.484,0,0,1,.742-2.793,2.49,2.49,0,0,1,2.086-.955,2.4,2.4,0,0,1,2.051.955,4.657,4.657,0,0,1,.707,2.793Z" transform="translate(-546.692 -125.341)"/><path d="M775.725,183.174V153.686h-5.233v29.7a6.39,6.39,0,0,0,1.414,4.455,5.167,5.167,0,0,0,4.031,1.556,6.417,6.417,0,0,0,2.758-.566v-3.394h-1.061q-1.909,0-1.909-2.263" transform="translate(-640.63 -127.783)"/><path d="M834.1,183.174V153.686h-5.233v29.7a6.39,6.39,0,0,0,1.414,4.455,5.167,5.167,0,0,0,4.031,1.556,6.417,6.417,0,0,0,2.758-.566v-3.394h-1.061q-1.909,0-1.909-2.263" transform="translate(-689.168 -127.783)"/><path d="M895.693,150.749a8.08,8.08,0,0,0-5.869,2.121q-2.193,2.121-2.192,6.364v19.234q0,4.314,2.051,6.4a8.728,8.728,0,0,0,11.526-.177q2.191-2.262,2.192-6.576v-2.758H898.31v3.253a6.05,6.05,0,0,1-.707,3.147,2.384,2.384,0,0,1-2.192,1.167,2.449,2.449,0,0,1-2.086-.884,4.488,4.488,0,0,1-.672-2.723v-.212a19.844,19.844,0,0,1,.141-2.687,4.944,4.944,0,0,1,.707-1.909,7.092,7.092,0,0,1,1.768-1.838l3.394-2.687a14.639,14.639,0,0,0,3.819-4.208,10.005,10.005,0,0,0,1.273-5.056v-1.485q0-4.384-2.015-6.435t-6.046-2.051m2.758,10.041a9.412,9.412,0,0,1-.636,3.642,8.467,8.467,0,0,1-2.334,3.005l-2.333,1.98a3.192,3.192,0,0,0-.283.261V158.527a4.484,4.484,0,0,1,.742-2.793,2.49,2.49,0,0,1,2.086-.955,2.4,2.4,0,0,1,2.051.955,4.656,4.656,0,0,1,.707,2.793Z" transform="translate(-738.027 -125.341)"/><path d="M1002.812,183.731a9.545,9.545,0,0,1,.495-3.04,28.323,28.323,0,0,1,1.7-3.817l5.443-10.18a15.928,15.928,0,0,0,1.626-4.489,29.424,29.424,0,0,0,.424-5.408v-3.11H998v4.242h9.473v1.131a8.07,8.07,0,0,1-.459,2.757q-.461,1.272-1.591,3.605l-.283.495-5.3,10.109a16.66,16.66,0,0,0-1.661,4.56,28.269,28.269,0,0,0-.459,5.479v2.9h14.917v-4.241h-9.827Z" transform="translate(-829.562 -127.783)"/><path d="M552.429,168.74a12.929,12.929,0,0,0,2.805-3.33,7.855,7.855,0,0,0,.956-3.719v-.921a6.294,6.294,0,0,0-2.373-5.171,9.691,9.691,0,0,0-6.269-1.913h-7.438v35.276h8.359a8.462,8.462,0,0,0,6.2-2.444,8.817,8.817,0,0,0,2.3-6.411v-1.771a11.581,11.581,0,0,0-1.594-5.879,15.925,15.925,0,0,0-2.947-3.718m-5.305-11.016a3.937,3.937,0,0,1,2.8,1.027,3.56,3.56,0,0,1,1.1,2.727v.637a6.22,6.22,0,0,1-.6,2.869,10.3,10.3,0,0,1-2.373,2.727l-2.55,2.267c-.121.108-.239.221-.354.336V157.724Zm4.534,22.668a4.6,4.6,0,0,1-1.169,3.294,4.125,4.125,0,0,1-3.152,1.24h-2.2v-6.3a7.708,7.708,0,0,1,.638-3.612,13.189,13.189,0,0,1,2.762-2.975l.644-.541a7.634,7.634,0,0,1,1.765,2.489,13.77,13.77,0,0,1,.708,4.994Z" transform="translate(-449.078 -127.783)"/><path d="M1114.708,152.835a7.551,7.551,0,0,0-5.692-2.086,7.679,7.679,0,0,0-5.834,2.263q-2.158,2.264-2.157,6.576v2.758h5.021v-3.253a6.042,6.042,0,0,1,.707-3.147,2.447,2.447,0,0,1,2.263-1.167,2.355,2.355,0,0,1,2.051.884,4.69,4.69,0,0,1,.636,2.722v.212a20.016,20.016,0,0,1-.142,2.687,4.964,4.964,0,0,1-.707,1.909,7.548,7.548,0,0,1-1.7,1.838l-3.394,2.687a14.65,14.65,0,0,0-3.819,4.207,10.009,10.009,0,0,0-1.273,5.056v1.485q0,4.385,2.015,6.435t5.975,2.051a8.057,8.057,0,0,0,5.9-2.121q2.156-2.121,2.157-6.364V159.235q0-4.313-2.015-6.4m-3.889,29.134a2.568,2.568,0,0,1-2.157.955,2.3,2.3,0,0,1-2.015-.955,4.832,4.832,0,0,1-.672-2.793v-2.263a9.9,9.9,0,0,1,.6-3.642,8.073,8.073,0,0,1,2.3-3.005l2.4-1.98a3.775,3.775,0,0,0,.283-.3v11.187a4.483,4.483,0,0,1-.742,2.793" transform="translate(-915.16 -125.341)"/></g><rect class="c" width="3.094" height="17.739" transform="translate(69.61 43.441)"/><rect class="d" width="3.094" height="17.739" transform="translate(69.61 25.701)"/><rect class="e" width="3.094" height="17.739" transform="translate(69.61 7.962)"/></svg>`,
                    "width": 202,
                    "height": 62
                },
                "b": {
                    "file": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="201.564" height="61.613" viewBox="0 0 201.564 61.613"><defs><style>.a{fill:none;}.b{clip-path:url(#a);}.c{fill:#e5004b;}.d{fill:#d1020a;}.e{fill:#eb6619;}</style><clipPath id="a"><rect class="a" width="201.564" height="61.613"/></clipPath></defs><g class="b"><path d="M79.157,309.349l-5.2-10.873h1.413a1.664,1.664,0,0,1,1.507.957l2.859,6.091,2.837-6.087a1.663,1.663,0,0,1,1.508-.961H85.5l-5.2,10.873Z" transform="translate(-61.491 -248.17)"/><path d="M6.507,298.475H5.338L0,309.348H1.293a1.8,1.8,0,0,0,1.584-.955L4,306.221a7.266,7.266,0,0,1,5.354,3.128h2.5Zm-.58,3.736L7.343,305.2a10.2,10.2,0,0,0-2.455-.8Z" transform="translate(0 -248.169)"/><path d="M256.159,298.474a1.144,1.144,0,0,0-1.144,1.145l.007,5.736-5.678-6.881h-1.684v10.873h1.04a1.144,1.144,0,0,0,1.144-1.145l-.006-5.724,4.655,5.66a3.164,3.164,0,0,0,2.242,1.209h.465V298.474Z" transform="translate(-205.917 -248.168)"/><path d="M161.3,306.434a3.572,3.572,0,0,1-3.567-3.631,3.653,3.653,0,0,1,3.873-3.494,3.569,3.569,0,0,1-.306,7.125m4.089-7.622a5.749,5.749,0,1,0-4.089,9.744,5.786,5.786,0,0,0,4.08-1.657,5.528,5.528,0,0,0,1.71-4.032,5.622,5.622,0,0,0-1.7-4.055" transform="translate(-129.314 -247.098)"/><path d="M14.38,161.771c2.88,0,4.206,1.832,4.206,3.583v3.862H16.777v-3.862c0-1.11-.627-2.887-2.4-2.887-1.739,0-2.382,1.777-2.382,2.887,0,1.089-.011,3.862-.011,3.862H10.17v-3.862c0-1.751,1.342-3.583,4.21-3.583" transform="translate(-8.456 -134.505)"/><path d="M162.886,169.881c-2.891,0-4.214-1.81-4.214-3.562v-3.872h1.821v3.872c0,1.1.622,2.891,2.393,2.891,1.752,0,2.4-1.8,2.4-2.891v-3.872h1.8v3.872c0,1.752-1.323,3.562-4.2,3.562" transform="translate(-131.929 -135.067)"/><path d="M74.258,169.187a2.779,2.779,0,0,1-1.471.608,3.85,3.85,0,0,1-4.5-3.568c-.1-2.745,2.6-3.885,4.36-3.847a3.811,3.811,0,0,1,4.009,3.589v3.752H74.838v-3.727c0-.821-.359-2.891-2.252-2.952-1.84-.055-2.427,1.663-2.442,2.927,0,.814.194,2.819,2.3,2.939a3.787,3.787,0,0,0,1.815-.367Z" transform="translate(-56.776 -135.011)"/><path d="M132.507,154.966a3.016,3.016,0,0,1-1.663.04c-.867-.213-2.283-.627-2.283-3.533v-8.133h1.851v3.241h1.69V147.7h-1.69s.055,2.3,0,4.136c-.029,1.642.456,2.22.831,2.4a1.971,1.971,0,0,0,1.264.076Z" transform="translate(-106.893 -119.182)"/><path d="M218.857,165.4c0-1.821.937-3.081,2.579-3.241a2.848,2.848,0,0,1,1.583.095v.713a2.881,2.881,0,0,0-1.294.034c-.732.249-1.021,1.369-1.021,1.756,0,1.325,0,4.778,0,4.778h-1.846Z" transform="translate(-181.97 -134.789)"/><path d="M250.392,169.185a2.9,2.9,0,0,1-1.475.608,3.846,3.846,0,0,1-4.493-3.568c-.091-2.745,2.593-3.891,4.36-3.847a3.808,3.808,0,0,1,4.01,3.589v3.752h-1.815v-3.727c0-.821-.376-2.891-2.254-2.956-1.838-.051-2.42,1.667-2.42,2.931,0,.814.144,2.811,2.279,2.939a3.718,3.718,0,0,0,1.808-.367Z" transform="translate(-203.226 -135.009)"/><path d="M79.327,3.3c-2.4-.728-3.891,1.028-4.554,3.283-.565,1.8-.68,2.294-.994,3.235-.469,1.308-1.583,1.393-2.425.386C70.369,9.01,69.067,7.242,68.339,6.4c-.96-1.118-3.292-2.07-4.457-.612-1.777,2.2.578,4.664,1.825,6.132.867,1.055,1.891,1.766,1.568,2.357a.836.836,0,0,1-.766.293c-.872-.019-3.727-.8-4.4-.92-.559-.12-.979-.091-1.137.344-.2.5.517,1.961,2.378,2.921A21.636,21.636,0,0,0,68.491,18.4c1.083.23.876.779.606,1.026-.239.264-.538.443-.483.711.169.692,1.638.838,2.524.981a5.24,5.24,0,0,0,2.718-.1c.764-.3.81-.728,1.334-.912.7-.268.935-.044,2.431.249a9.11,9.11,0,0,0,3.6-.367c1.737-.568,2.454-1.14,2.454-1.4,0-.219-.3-.3-.618-.323A7.508,7.508,0,0,1,81,17.723c-.411-.285-.084-.768.762-1.106a21.775,21.775,0,0,0,4.786-2.488c1.07-.945,2.072-2.543,1.19-3.463s-2.463.015-3.3.4a31.457,31.457,0,0,1-3.577,1.612c-.547.135-1.576.1-1.1-1.148.6-1.534.876-2.479,1.243-3.4.458-1.14,1.1-3.971-1.671-4.826m10.545,7.633c-.768,3.262-4.6,5.193-4.972,5.408-.384.19-.855.388-1.023.5-.07.044-.116.089.023.133.409.11,1.766.025,1.743.6-.006.62-1.028,1.635-3.644,2.752a9.254,9.254,0,0,1-5.839.528l-.053.015c-.158.173-1.488,1.447-5.259.8-2.7-.473-3.378-.741-4.009-1.454a.957.957,0,0,1-.04-1.07c.04-.118.053-.184-.021-.209a11.3,11.3,0,0,1-7.508-5.064,1.558,1.558,0,0,1-.07-1.726c.323-.494,1.408-.528,2.539-.249,1.251.344,1.954.506,2.218.572.089.036.1,0,.055-.065-.319-.386-1.429-1.785-2.009-2.682-.926-1.473-2.125-5.4.949-7.025,3.423-1.781,6.415,1.359,7.076,2.18.582.711,1.762,2.287,1.851,2.448.15.253.226.044.226.044a28.98,28.98,0,0,1,1.5-4.225A5.706,5.706,0,0,1,79.582.082c4.21.787,4.368,5.035,4.035,6.594A19.871,19.871,0,0,1,82.592,9.84c-.03.07,0,.08.055.044.323-.15,1.825-.884,3.429-1.572,1.6-.671,4.548-.65,3.8,2.619" transform="translate(-49.037 0)"/><path d="M545.748,55.206a3.76,3.76,0,0,1-1.643.315,4.52,4.52,0,1,1,.012-9.039,4.069,4.069,0,0,1,1.631.3v1.9a3.229,3.229,0,0,0-1.515-.326,2.639,2.639,0,1,0,0,5.277,3.381,3.381,0,0,0,1.515-.3Z" transform="translate(-448.584 -38.647)"/><path d="M585.334,51a4.566,4.566,0,1,1,4.555,4.531A4.424,4.424,0,0,1,585.334,51m7.105,0a2.542,2.542,0,1,0-2.551,2.656A2.529,2.529,0,0,0,592.439,51" transform="translate(-486.679 -38.647)"/><path d="M659.034,46.9V55.7h-.221l-5.836-4.974v4.9h-1.992V46.826h.221l5.824,4.939V46.9Z" transform="translate(-541.265 -38.934)"/><path d="M711.327,55V53.226a2.931,2.931,0,0,0,1.771.582c1.083,0,1.561-.548,1.561-1.083,0-.443-.245-.815-.885-1.13l-.874-.431A2.41,2.41,0,0,1,711.315,49c0-1.456,1.293-2.516,3.32-2.516a3.553,3.553,0,0,1,1.642.315v1.77a2.753,2.753,0,0,0-1.433-.4c-.885,0-1.41.35-1.41.9,0,.361.221.606.757.862l.839.419a2.544,2.544,0,0,1,1.666,2.388c0,1.514-1.083,2.8-3.39,2.8a3.539,3.539,0,0,1-1.98-.536" transform="translate(-591.427 -38.648)"/><path d="M753.815,52.25V47.241h2.038v5.02a1.942,1.942,0,1,0,3.879,0v-5.02h2.038V52.25a3.978,3.978,0,0,1-7.956,0" transform="translate(-626.764 -39.279)"/><path d="M819.531,54.207v1.771h-4.624V47.241h2.038v6.966Z" transform="translate(-677.558 -39.279)"/><path d="M845.808,49.012h-1.945V47.241h5.917v1.771h-1.934v6.966h-2.038Z" transform="translate(-701.634 -39.279)"/><path d="M883.391,51a4.566,4.566,0,1,1,4.555,4.531A4.424,4.424,0,0,1,883.391,51m7.105,0a2.542,2.542,0,1,0-2.551,2.656A2.529,2.529,0,0,0,890.5,51" transform="translate(-734.5 -38.647)"/><path d="M954.19,55.977l-1.351-2.516c-.2.012-.408.023-.629.023a6.226,6.226,0,0,1-1.107-.093v2.586h-2.062V47.241h3.588c2.283,0,3.6,1.118,3.6,2.994a2.881,2.881,0,0,1-1.491,2.679l1.666,3.064Zm-.047-5.638c0-.815-.466-1.316-1.712-1.316H951.1v2.714a5.8,5.8,0,0,0,1.048.082c1.375,0,1.992-.513,1.992-1.479" transform="translate(-789.086 -39.279)"/><rect width="2.027" height="8.736" transform="translate(169.076 7.962)"/><path d="M1031.378,54.638h-3.087L1027.743,56h-2.213l4.182-8.732h.233L1034.126,56h-2.2Zm-1.549-3.927-.967,2.423h1.945Z" transform="translate(-852.683 -39.3)"/><path d="M1112.384,51.621c0,2.715-1.986,4.619-5.1,4.619a9.393,9.393,0,0,1-2.856-.4v-8.6h3.1c2.938,0,4.854,1.869,4.854,4.384m-2.069.047a2.552,2.552,0,0,0-2.75-2.621H1106.4v5.289a9.283,9.283,0,0,0,1.152.082,2.575,2.575,0,0,0,2.762-2.75" transform="translate(-918.282 -39.275)"/><path d="M1166.74,54.212v1.77h-5.913V47.247h5.831v1.77h-3.907V50.6h3.719v1.654h-3.719v1.957Z" transform="translate(-965.176 -39.284)"/><path d="M1001.589,35V33.849l2.879-.6v1.227Z" transform="translate(-832.777 -27.643)"/><path d="M665.573,150.749a8.08,8.08,0,0,0-5.869,2.121q-2.193,2.121-2.192,6.364v19.234q0,4.314,2.051,6.4a8.728,8.728,0,0,0,11.526-.177q2.191-2.262,2.192-6.576v-2.758H668.19v3.253a6.051,6.051,0,0,1-.707,3.147,2.384,2.384,0,0,1-2.192,1.167,2.449,2.449,0,0,1-2.086-.884,4.486,4.486,0,0,1-.672-2.723v-.212a19.854,19.854,0,0,1,.141-2.687,4.945,4.945,0,0,1,.707-1.909,7.093,7.093,0,0,1,1.768-1.838l3.394-2.687a14.638,14.638,0,0,0,3.819-4.208,10.005,10.005,0,0,0,1.273-5.056v-1.485q0-4.384-2.016-6.435t-6.046-2.051m2.758,10.041a9.411,9.411,0,0,1-.636,3.642,8.468,8.468,0,0,1-2.334,3.005l-2.333,1.98a3.2,3.2,0,0,0-.283.261V158.527a4.484,4.484,0,0,1,.742-2.793,2.49,2.49,0,0,1,2.086-.955,2.4,2.4,0,0,1,2.051.955,4.657,4.657,0,0,1,.707,2.793Z" transform="translate(-546.692 -125.341)"/><path d="M775.725,183.174V153.686h-5.233v29.7a6.39,6.39,0,0,0,1.414,4.455,5.167,5.167,0,0,0,4.031,1.556,6.417,6.417,0,0,0,2.758-.566v-3.394h-1.061q-1.909,0-1.909-2.263" transform="translate(-640.63 -127.783)"/><path d="M834.1,183.174V153.686h-5.233v29.7a6.39,6.39,0,0,0,1.414,4.455,5.167,5.167,0,0,0,4.031,1.556,6.417,6.417,0,0,0,2.758-.566v-3.394h-1.061q-1.909,0-1.909-2.263" transform="translate(-689.168 -127.783)"/><path d="M895.693,150.749a8.08,8.08,0,0,0-5.869,2.121q-2.193,2.121-2.192,6.364v19.234q0,4.314,2.051,6.4a8.728,8.728,0,0,0,11.526-.177q2.191-2.262,2.192-6.576v-2.758H898.31v3.253a6.05,6.05,0,0,1-.707,3.147,2.384,2.384,0,0,1-2.192,1.167,2.449,2.449,0,0,1-2.086-.884,4.488,4.488,0,0,1-.672-2.723v-.212a19.844,19.844,0,0,1,.141-2.687,4.944,4.944,0,0,1,.707-1.909,7.092,7.092,0,0,1,1.768-1.838l3.394-2.687a14.639,14.639,0,0,0,3.819-4.208,10.005,10.005,0,0,0,1.273-5.056v-1.485q0-4.384-2.015-6.435t-6.046-2.051m2.758,10.041a9.412,9.412,0,0,1-.636,3.642,8.467,8.467,0,0,1-2.334,3.005l-2.333,1.98a3.192,3.192,0,0,0-.283.261V158.527a4.484,4.484,0,0,1,.742-2.793,2.49,2.49,0,0,1,2.086-.955,2.4,2.4,0,0,1,2.051.955,4.656,4.656,0,0,1,.707,2.793Z" transform="translate(-738.027 -125.341)"/><path d="M1002.812,183.731a9.545,9.545,0,0,1,.495-3.04,28.323,28.323,0,0,1,1.7-3.817l5.443-10.18a15.928,15.928,0,0,0,1.626-4.489,29.424,29.424,0,0,0,.424-5.408v-3.11H998v4.242h9.473v1.131a8.07,8.07,0,0,1-.459,2.757q-.461,1.272-1.591,3.605l-.283.495-5.3,10.109a16.66,16.66,0,0,0-1.661,4.56,28.269,28.269,0,0,0-.459,5.479v2.9h14.917v-4.241h-9.827Z" transform="translate(-829.562 -127.783)"/><path d="M552.429,168.74a12.929,12.929,0,0,0,2.805-3.33,7.855,7.855,0,0,0,.956-3.719v-.921a6.294,6.294,0,0,0-2.373-5.171,9.691,9.691,0,0,0-6.269-1.913h-7.438v35.276h8.359a8.462,8.462,0,0,0,6.2-2.444,8.817,8.817,0,0,0,2.3-6.411v-1.771a11.581,11.581,0,0,0-1.594-5.879,15.925,15.925,0,0,0-2.947-3.718m-5.305-11.016a3.937,3.937,0,0,1,2.8,1.027,3.56,3.56,0,0,1,1.1,2.727v.637a6.22,6.22,0,0,1-.6,2.869,10.3,10.3,0,0,1-2.373,2.727l-2.55,2.267c-.121.108-.239.221-.354.336V157.724Zm4.534,22.668a4.6,4.6,0,0,1-1.169,3.294,4.125,4.125,0,0,1-3.152,1.24h-2.2v-6.3a7.708,7.708,0,0,1,.638-3.612,13.189,13.189,0,0,1,2.762-2.975l.644-.541a7.634,7.634,0,0,1,1.765,2.489,13.77,13.77,0,0,1,.708,4.994Z" transform="translate(-449.078 -127.783)"/><path d="M1114.708,152.835a7.551,7.551,0,0,0-5.692-2.086,7.679,7.679,0,0,0-5.834,2.263q-2.158,2.264-2.157,6.576v2.758h5.021v-3.253a6.042,6.042,0,0,1,.707-3.147,2.447,2.447,0,0,1,2.263-1.167,2.355,2.355,0,0,1,2.051.884,4.69,4.69,0,0,1,.636,2.722v.212a20.016,20.016,0,0,1-.142,2.687,4.964,4.964,0,0,1-.707,1.909,7.548,7.548,0,0,1-1.7,1.838l-3.394,2.687a14.65,14.65,0,0,0-3.819,4.207,10.009,10.009,0,0,0-1.273,5.056v1.485q0,4.385,2.015,6.435t5.975,2.051a8.057,8.057,0,0,0,5.9-2.121q2.156-2.121,2.157-6.364V159.235q0-4.313-2.015-6.4m-3.889,29.134a2.568,2.568,0,0,1-2.157.955,2.3,2.3,0,0,1-2.015-.955,4.832,4.832,0,0,1-.672-2.793v-2.263a9.9,9.9,0,0,1,.6-3.642,8.073,8.073,0,0,1,2.3-3.005l2.4-1.98a3.775,3.775,0,0,0,.283-.3v11.187a4.483,4.483,0,0,1-.742,2.793" transform="translate(-915.16 -125.341)"/></g><rect class="c" width="3.094" height="17.739" transform="translate(69.61 43.441)"/><rect class="d" width="3.094" height="17.739" transform="translate(69.61 25.701)"/><rect class="e" width="3.094" height="17.739" transform="translate(69.61 7.962)"/></svg>`,
                    "width": 202,
                    "height": 62
                }
            },
            "custom": {
                "a": {
                    "file": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200.222" height="61.203" viewBox="0 0 200.222 61.203"><defs><style>.a{fill:none;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="200.222" height="61.203"/></clipPath></defs><g class="b"><path d="M79.123,309.277l-5.167-10.8h1.4a1.653,1.653,0,0,1,1.5.951l2.84,6.05,2.818-6.047a1.652,1.652,0,0,1,1.5-.954h1.415l-5.166,10.8Z" transform="translate(-61.574 -248.504)"/><path d="M6.463,298.475H5.3L0,309.276H1.285a1.789,1.789,0,0,0,1.573-.949l1.115-2.158a7.217,7.217,0,0,1,5.319,3.107h2.487Zm-.576,3.712,1.407,2.966a10.128,10.128,0,0,0-2.439-.8Z" transform="translate(0 -248.504)"/><path d="M256.1,298.474a1.137,1.137,0,0,0-1.137,1.138l.007,5.7-5.64-6.835h-1.673v10.8h1.033a1.137,1.137,0,0,0,1.137-1.138l-.006-5.686,4.624,5.623a3.143,3.143,0,0,0,2.227,1.2h.462v-10.8Z" transform="translate(-206.195 -248.503)"/><path d="M161.261,306.373a3.548,3.548,0,0,1-3.543-3.607,3.628,3.628,0,0,1,3.847-3.471,3.545,3.545,0,0,1-.3,7.078m4.062-7.571a5.734,5.734,0,0,0-9.8,4.028,5.58,5.58,0,0,0,1.673,4,5.688,5.688,0,0,0,4.062,1.651,5.747,5.747,0,0,0,4.053-1.646,5.491,5.491,0,0,0,1.7-4.005,5.584,5.584,0,0,0-1.689-4.028" transform="translate(-129.488 -247.431)"/><path d="M14.352,161.771c2.861,0,4.178,1.82,4.178,3.559v3.836h-1.8V165.33c0-1.1-.623-2.867-2.381-2.867-1.727,0-2.367,1.765-2.367,2.867,0,1.082-.011,3.836-.011,3.836h-1.8V165.33c0-1.74,1.333-3.559,4.182-3.559" transform="translate(-8.467 -134.687)"/><path d="M162.858,169.832c-2.872,0-4.186-1.8-4.186-3.538v-3.847h1.809v3.847c0,1.088.618,2.872,2.377,2.872,1.74,0,2.379-1.784,2.379-2.872v-3.847h1.792v3.847c0,1.74-1.314,3.538-4.171,3.538" transform="translate(-132.107 -135.25)"/><path d="M74.218,169.142a2.761,2.761,0,0,1-1.461.6,3.824,3.824,0,0,1-4.469-3.545c-.1-2.727,2.58-3.859,4.331-3.821a3.785,3.785,0,0,1,3.983,3.566v3.727H74.794v-3.7c0-.816-.356-2.872-2.237-2.933-1.828-.054-2.411,1.652-2.425,2.907,0,.809.193,2.8,2.283,2.92a3.762,3.762,0,0,0,1.8-.365Z" transform="translate(-56.853 -135.193)"/><path d="M132.481,154.889a3,3,0,0,1-1.652.04c-.862-.212-2.268-.623-2.268-3.509v-8.079H130.4v3.22h1.679v1.111H130.4s.055,2.289,0,4.109c-.029,1.631.453,2.205.826,2.381a1.958,1.958,0,0,0,1.256.076Z" transform="translate(-107.037 -119.343)"/><path d="M218.857,165.377c0-1.809.931-3.06,2.561-3.22a2.829,2.829,0,0,1,1.572.094v.709a2.862,2.862,0,0,0-1.285.034c-.727.247-1.015,1.36-1.015,1.744,0,1.316,0,4.746,0,4.746h-1.834Z" transform="translate(-182.215 -134.97)"/><path d="M250.352,169.14a2.886,2.886,0,0,1-1.465.6,3.821,3.821,0,0,1-4.463-3.545c-.09-2.727,2.576-3.865,4.331-3.821a3.782,3.782,0,0,1,3.983,3.566v3.727h-1.8v-3.7c0-.816-.373-2.872-2.239-2.937-1.826-.05-2.4,1.656-2.4,2.912,0,.809.143,2.792,2.264,2.92a3.693,3.693,0,0,0,1.8-.365Z" transform="translate(-203.5 -135.191)"/><path d="M79.192,3.276C76.8,2.553,75.326,4.3,74.668,6.538c-.562,1.788-.675,2.278-.987,3.213-.465,1.3-1.572,1.384-2.409.384-.979-1.184-2.272-2.941-3-3.782-.954-1.111-3.27-2.056-4.427-.608-1.765,2.186.574,4.633,1.813,6.091.862,1.048,1.878,1.754,1.557,2.341a.83.83,0,0,1-.761.291c-.866-.019-3.7-.795-4.366-.914-.556-.12-.973-.09-1.13.342-.2.5.513,1.947,2.362,2.9a21.492,21.492,0,0,0,5.1,1.482c1.075.229.87.773.6,1.019-.237.262-.535.44-.48.706.168.688,1.627.832,2.507.975a5.205,5.205,0,0,0,2.7-.1c.759-.293.8-.723,1.325-.906.692-.266.929-.044,2.415.247a9.05,9.05,0,0,0,3.574-.365c1.725-.564,2.438-1.132,2.438-1.39,0-.218-.3-.3-.614-.321a7.458,7.458,0,0,1-2.042-.543c-.409-.283-.084-.763.757-1.1a21.63,21.63,0,0,0,4.754-2.471c1.063-.939,2.058-2.526,1.182-3.44s-2.446.015-3.278.394a31.248,31.248,0,0,1-3.553,1.6c-.543.134-1.566.094-1.1-1.14.593-1.524.87-2.463,1.235-3.381.455-1.132,1.094-3.945-1.66-4.794m10.475,7.582c-.763,3.241-4.572,5.159-4.939,5.372-.382.189-.849.386-1.017.495-.069.044-.115.088.023.132.407.109,1.755.025,1.731.6-.006.616-1.021,1.625-3.62,2.733a9.192,9.192,0,0,1-5.8.524l-.052.015c-.157.172-1.478,1.438-5.224.79-2.683-.47-3.356-.736-3.983-1.444a.951.951,0,0,1-.04-1.063c.04-.117.052-.182-.021-.208a11.221,11.221,0,0,1-7.458-5.031,1.548,1.548,0,0,1-.069-1.715c.321-.491,1.4-.524,2.522-.247,1.243.342,1.941.5,2.2.568.088.036.094,0,.055-.065-.317-.384-1.419-1.773-2-2.664-.92-1.463-2.111-5.362.943-6.978C66.325.9,69.3,4.022,69.954,4.838c.578.706,1.75,2.272,1.838,2.432.149.251.224.044.224.044a28.787,28.787,0,0,1,1.492-4.2A5.668,5.668,0,0,1,79.445.082c4.182.782,4.339,5,4.008,6.551a19.74,19.74,0,0,1-1.019,3.142c-.029.069,0,.08.055.044C82.81,9.669,84.3,8.94,85.9,8.256c1.591-.667,4.517-.646,3.771,2.6" transform="translate(-49.103 0)"/><path d="M545.707,55.147a3.735,3.735,0,0,1-1.632.312,4.49,4.49,0,1,1,.012-8.979,4.042,4.042,0,0,1,1.62.3v1.886a3.208,3.208,0,0,0-1.5-.324,2.621,2.621,0,1,0,0,5.241,3.358,3.358,0,0,0,1.5-.3Z" transform="translate(-449.189 -38.699)"/><path d="M585.334,50.97a4.536,4.536,0,1,1,4.524,4.5,4.4,4.4,0,0,1-4.524-4.5m7.058,0a2.525,2.525,0,1,0-2.534,2.638,2.512,2.512,0,0,0,2.534-2.638" transform="translate(-487.336 -38.699)"/><path d="M658.981,46.9v8.747h-.22l-5.8-4.941v4.871h-1.979V46.826h.22l5.785,4.906V46.9Z" transform="translate(-541.996 -38.987)"/><path d="M711.327,54.94V53.181a2.911,2.911,0,0,0,1.759.579c1.076,0,1.55-.544,1.55-1.076,0-.44-.243-.81-.879-1.122l-.868-.428a2.394,2.394,0,0,1-1.574-2.152c0-1.446,1.284-2.5,3.3-2.5a3.53,3.53,0,0,1,1.632.312v1.759a2.734,2.734,0,0,0-1.423-.393c-.879,0-1.4.347-1.4.891,0,.359.22.6.752.856l.833.417a2.527,2.527,0,0,1,1.655,2.372c0,1.5-1.076,2.777-3.367,2.777a3.516,3.516,0,0,1-1.967-.532" transform="translate(-592.225 -38.7)"/><path d="M753.815,52.216V47.241h2.025v4.987a1.929,1.929,0,1,0,3.853,0V47.241h2.025v4.975a3.952,3.952,0,0,1-7.9,0" transform="translate(-627.609 -39.332)"/><path d="M819.5,54.16v1.759h-4.594V47.241h2.025V54.16Z" transform="translate(-678.473 -39.332)"/><path d="M845.795,49h-1.932V47.241h5.878V49h-1.921v6.919h-2.025Z" transform="translate(-702.581 -39.332)"/><path d="M883.391,50.97a4.536,4.536,0,1,1,4.524,4.5,4.4,4.4,0,0,1-4.524-4.5m7.058,0a2.525,2.525,0,1,0-2.534,2.638,2.512,2.512,0,0,0,2.534-2.638" transform="translate(-735.492 -38.699)"/><path d="M954.156,55.919l-1.342-2.5c-.2.012-.405.023-.625.023a6.184,6.184,0,0,1-1.1-.093v2.569h-2.048V47.241h3.564c2.268,0,3.575,1.111,3.575,2.974a2.862,2.862,0,0,1-1.481,2.661l1.655,3.043Zm-.046-5.6c0-.81-.463-1.308-1.7-1.308H951.09v2.7a5.759,5.759,0,0,0,1.041.081c1.365,0,1.979-.509,1.979-1.469" transform="translate(-790.151 -39.332)"/><rect width="2.013" height="8.678" transform="translate(167.95 7.909)"/><path d="M1031.339,54.589h-3.066l-.544,1.352h-2.2l4.154-8.674h.231l4.154,8.674h-2.187Zm-1.539-3.9-.96,2.407h1.932Z" transform="translate(-853.833 -39.353)"/><path d="M1112.331,51.592c0,2.7-1.973,4.588-5.067,4.588a9.33,9.33,0,0,1-2.837-.4V47.237h3.082c2.919,0,4.822,1.856,4.822,4.355m-2.055.047a2.535,2.535,0,0,0-2.732-2.6h-1.156v5.254a9.219,9.219,0,0,0,1.144.082,2.558,2.558,0,0,0,2.744-2.732" transform="translate(-919.521 -39.328)"/><path d="M1166.7,54.166v1.758h-5.874V47.247h5.792v1.759h-3.881v1.573h3.695v1.643h-3.695v1.944Z" transform="translate(-966.478 -39.337)"/><path d="M1001.589,34.987V33.845l2.86-.6v1.219Z" transform="translate(-833.901 -27.68)"/><path d="M665.52,150.749a8.026,8.026,0,0,0-5.83,2.107q-2.178,2.107-2.178,6.322v19.106q0,4.286,2.037,6.357a8.67,8.67,0,0,0,11.45-.176q2.176-2.247,2.177-6.533v-2.739h-5.057v3.231a6.011,6.011,0,0,1-.7,3.126,2.368,2.368,0,0,1-2.178,1.159,2.433,2.433,0,0,1-2.072-.878,4.456,4.456,0,0,1-.667-2.7v-.211a19.718,19.718,0,0,1,.141-2.669,4.911,4.911,0,0,1,.7-1.9,7.045,7.045,0,0,1,1.756-1.826l3.372-2.669a14.541,14.541,0,0,0,3.793-4.18,9.938,9.938,0,0,0,1.264-5.022v-1.475q0-4.355-2-6.392t-6.006-2.037m2.739,9.975a9.349,9.349,0,0,1-.632,3.617,8.412,8.412,0,0,1-2.318,2.985l-2.318,1.967a3.179,3.179,0,0,0-.281.259V158.476a4.455,4.455,0,0,1,.737-2.775,2.474,2.474,0,0,1,2.072-.948,2.38,2.38,0,0,1,2.037.948,4.625,4.625,0,0,1,.7,2.775Z" transform="translate(-547.43 -125.51)"/><path d="M775.69,182.977V153.686h-5.2v29.5a6.348,6.348,0,0,0,1.4,4.425,5.133,5.133,0,0,0,4,1.545,6.374,6.374,0,0,0,2.739-.562v-3.372h-1.054q-1.9,0-1.9-2.248" transform="translate(-641.494 -127.956)"/><path d="M834.067,182.977V153.686h-5.2v29.5a6.348,6.348,0,0,0,1.405,4.425,5.133,5.133,0,0,0,4,1.545,6.375,6.375,0,0,0,2.739-.562v-3.372h-1.054q-1.9,0-1.9-2.248" transform="translate(-690.098 -127.956)"/><path d="M895.64,150.749a8.026,8.026,0,0,0-5.83,2.107q-2.178,2.107-2.177,6.322v19.106q0,4.286,2.037,6.357a8.67,8.67,0,0,0,11.449-.176q2.176-2.247,2.177-6.533v-2.739h-5.057v3.231a6.01,6.01,0,0,1-.7,3.126,2.368,2.368,0,0,1-2.178,1.159,2.433,2.433,0,0,1-2.072-.878,4.458,4.458,0,0,1-.667-2.7v-.211a19.718,19.718,0,0,1,.141-2.669,4.912,4.912,0,0,1,.7-1.9,7.045,7.045,0,0,1,1.756-1.826l3.372-2.669a14.542,14.542,0,0,0,3.793-4.18,9.939,9.939,0,0,0,1.264-5.022v-1.475q0-4.355-2-6.392t-6.006-2.037m2.739,9.975a9.35,9.35,0,0,1-.632,3.617,8.411,8.411,0,0,1-2.318,2.985l-2.318,1.967a3.179,3.179,0,0,0-.281.259V158.476a4.455,4.455,0,0,1,.737-2.775,2.474,2.474,0,0,1,2.072-.948,2.38,2.38,0,0,1,2.037.948,4.625,4.625,0,0,1,.7,2.775Z" transform="translate(-739.023 -125.51)"/><path d="M1002.778,183.531a9.48,9.48,0,0,1,.492-3.02,28.13,28.13,0,0,1,1.685-3.792l5.407-10.112a15.825,15.825,0,0,0,1.615-4.459,29.229,29.229,0,0,0,.421-5.372v-3.09H998V157.9h9.41v1.124a8.017,8.017,0,0,1-.456,2.739q-.458,1.264-1.58,3.581l-.281.492-5.267,10.042a16.547,16.547,0,0,0-1.65,4.529,28.079,28.079,0,0,0-.456,5.442v2.879h14.817v-4.213h-9.761Z" transform="translate(-830.681 -127.956)"/><path d="M552.347,168.64a12.842,12.842,0,0,0,2.787-3.308,7.8,7.8,0,0,0,.95-3.694v-.915a6.252,6.252,0,0,0-2.357-5.137,9.626,9.626,0,0,0-6.227-1.9h-7.388v35.042h8.3a8.4,8.4,0,0,0,6.157-2.428,8.758,8.758,0,0,0,2.287-6.368v-1.759a11.5,11.5,0,0,0-1.583-5.84,15.818,15.818,0,0,0-2.927-3.693m-5.27-10.943a3.911,3.911,0,0,1,2.779,1.02,3.536,3.536,0,0,1,1.091,2.709v.633a6.179,6.179,0,0,1-.6,2.85,10.229,10.229,0,0,1-2.357,2.709l-2.533,2.252c-.12.107-.237.219-.352.334V157.7Zm4.5,22.517a4.572,4.572,0,0,1-1.161,3.272,4.1,4.1,0,0,1-3.131,1.231h-2.181v-6.262a7.657,7.657,0,0,1,.633-3.588,13.1,13.1,0,0,1,2.744-2.956l.64-.538a7.582,7.582,0,0,1,1.753,2.473,13.679,13.679,0,0,1,.7,4.961Z" transform="translate(-449.684 -127.956)"/><path d="M1114.615,152.821a7.5,7.5,0,0,0-5.655-2.072,7.628,7.628,0,0,0-5.8,2.248q-2.144,2.249-2.142,6.532v2.74h4.987v-3.231a6,6,0,0,1,.7-3.126,2.43,2.43,0,0,1,2.248-1.159,2.34,2.34,0,0,1,2.037.878,4.658,4.658,0,0,1,.632,2.7v.211a19.881,19.881,0,0,1-.141,2.669,4.932,4.932,0,0,1-.7,1.9,7.5,7.5,0,0,1-1.686,1.826l-3.372,2.669a14.551,14.551,0,0,0-3.793,4.179,9.942,9.942,0,0,0-1.264,5.022v1.475q0,4.356,2,6.392t5.936,2.037a8,8,0,0,0,5.865-2.107q2.142-2.107,2.142-6.322V159.178q0-4.284-2-6.357m-3.863,28.94a2.551,2.551,0,0,1-2.142.948,2.286,2.286,0,0,1-2-.948,4.8,4.8,0,0,1-.667-2.775v-2.248a9.832,9.832,0,0,1,.6-3.617,8.019,8.019,0,0,1,2.283-2.985l2.388-1.967a3.736,3.736,0,0,0,.281-.295v11.112a4.453,4.453,0,0,1-.737,2.775" transform="translate(-916.395 -125.51)"/></g><rect width="3.074" height="52.863" transform="translate(69.146 7.909)"/></svg>`,
                    "width": 201,
                    "height": 62
                },
                "b": {
                    "file": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200.222" height="61.203" viewBox="0 0 200.222 61.203"><defs><style>.a{fill:none;}.b{clip-path:url(#a);}</style><clipPath id="a"><rect class="a" width="200.222" height="61.203"/></clipPath></defs><g class="b"><path d="M79.123,309.277l-5.167-10.8h1.4a1.653,1.653,0,0,1,1.5.951l2.84,6.05,2.818-6.047a1.652,1.652,0,0,1,1.5-.954h1.415l-5.166,10.8Z" transform="translate(-61.574 -248.504)"/><path d="M6.463,298.475H5.3L0,309.276H1.285a1.789,1.789,0,0,0,1.573-.949l1.115-2.158a7.217,7.217,0,0,1,5.319,3.107h2.487Zm-.576,3.712,1.407,2.966a10.128,10.128,0,0,0-2.439-.8Z" transform="translate(0 -248.504)"/><path d="M256.1,298.474a1.137,1.137,0,0,0-1.137,1.138l.007,5.7-5.64-6.835h-1.673v10.8h1.033a1.137,1.137,0,0,0,1.137-1.138l-.006-5.686,4.624,5.623a3.143,3.143,0,0,0,2.227,1.2h.462v-10.8Z" transform="translate(-206.195 -248.503)"/><path d="M161.261,306.373a3.548,3.548,0,0,1-3.543-3.607,3.628,3.628,0,0,1,3.847-3.471,3.545,3.545,0,0,1-.3,7.078m4.062-7.571a5.734,5.734,0,0,0-9.8,4.028,5.58,5.58,0,0,0,1.673,4,5.688,5.688,0,0,0,4.062,1.651,5.747,5.747,0,0,0,4.053-1.646,5.491,5.491,0,0,0,1.7-4.005,5.584,5.584,0,0,0-1.689-4.028" transform="translate(-129.488 -247.431)"/><path d="M14.352,161.771c2.861,0,4.178,1.82,4.178,3.559v3.836h-1.8V165.33c0-1.1-.623-2.867-2.381-2.867-1.727,0-2.367,1.765-2.367,2.867,0,1.082-.011,3.836-.011,3.836h-1.8V165.33c0-1.74,1.333-3.559,4.182-3.559" transform="translate(-8.467 -134.687)"/><path d="M162.858,169.832c-2.872,0-4.186-1.8-4.186-3.538v-3.847h1.809v3.847c0,1.088.618,2.872,2.377,2.872,1.74,0,2.379-1.784,2.379-2.872v-3.847h1.792v3.847c0,1.74-1.314,3.538-4.171,3.538" transform="translate(-132.107 -135.25)"/><path d="M74.218,169.142a2.761,2.761,0,0,1-1.461.6,3.824,3.824,0,0,1-4.469-3.545c-.1-2.727,2.58-3.859,4.331-3.821a3.785,3.785,0,0,1,3.983,3.566v3.727H74.794v-3.7c0-.816-.356-2.872-2.237-2.933-1.828-.054-2.411,1.652-2.425,2.907,0,.809.193,2.8,2.283,2.92a3.762,3.762,0,0,0,1.8-.365Z" transform="translate(-56.853 -135.193)"/><path d="M132.481,154.889a3,3,0,0,1-1.652.04c-.862-.212-2.268-.623-2.268-3.509v-8.079H130.4v3.22h1.679v1.111H130.4s.055,2.289,0,4.109c-.029,1.631.453,2.205.826,2.381a1.958,1.958,0,0,0,1.256.076Z" transform="translate(-107.037 -119.343)"/><path d="M218.857,165.377c0-1.809.931-3.06,2.561-3.22a2.829,2.829,0,0,1,1.572.094v.709a2.862,2.862,0,0,0-1.285.034c-.727.247-1.015,1.36-1.015,1.744,0,1.316,0,4.746,0,4.746h-1.834Z" transform="translate(-182.215 -134.97)"/><path d="M250.352,169.14a2.886,2.886,0,0,1-1.465.6,3.821,3.821,0,0,1-4.463-3.545c-.09-2.727,2.576-3.865,4.331-3.821a3.782,3.782,0,0,1,3.983,3.566v3.727h-1.8v-3.7c0-.816-.373-2.872-2.239-2.937-1.826-.05-2.4,1.656-2.4,2.912,0,.809.143,2.792,2.264,2.92a3.693,3.693,0,0,0,1.8-.365Z" transform="translate(-203.5 -135.191)"/><path d="M79.192,3.276C76.8,2.553,75.326,4.3,74.668,6.538c-.562,1.788-.675,2.278-.987,3.213-.465,1.3-1.572,1.384-2.409.384-.979-1.184-2.272-2.941-3-3.782-.954-1.111-3.27-2.056-4.427-.608-1.765,2.186.574,4.633,1.813,6.091.862,1.048,1.878,1.754,1.557,2.341a.83.83,0,0,1-.761.291c-.866-.019-3.7-.795-4.366-.914-.556-.12-.973-.09-1.13.342-.2.5.513,1.947,2.362,2.9a21.492,21.492,0,0,0,5.1,1.482c1.075.229.87.773.6,1.019-.237.262-.535.44-.48.706.168.688,1.627.832,2.507.975a5.205,5.205,0,0,0,2.7-.1c.759-.293.8-.723,1.325-.906.692-.266.929-.044,2.415.247a9.05,9.05,0,0,0,3.574-.365c1.725-.564,2.438-1.132,2.438-1.39,0-.218-.3-.3-.614-.321a7.458,7.458,0,0,1-2.042-.543c-.409-.283-.084-.763.757-1.1a21.63,21.63,0,0,0,4.754-2.471c1.063-.939,2.058-2.526,1.182-3.44s-2.446.015-3.278.394a31.248,31.248,0,0,1-3.553,1.6c-.543.134-1.566.094-1.1-1.14.593-1.524.87-2.463,1.235-3.381.455-1.132,1.094-3.945-1.66-4.794m10.475,7.582c-.763,3.241-4.572,5.159-4.939,5.372-.382.189-.849.386-1.017.495-.069.044-.115.088.023.132.407.109,1.755.025,1.731.6-.006.616-1.021,1.625-3.62,2.733a9.192,9.192,0,0,1-5.8.524l-.052.015c-.157.172-1.478,1.438-5.224.79-2.683-.47-3.356-.736-3.983-1.444a.951.951,0,0,1-.04-1.063c.04-.117.052-.182-.021-.208a11.221,11.221,0,0,1-7.458-5.031,1.548,1.548,0,0,1-.069-1.715c.321-.491,1.4-.524,2.522-.247,1.243.342,1.941.5,2.2.568.088.036.094,0,.055-.065-.317-.384-1.419-1.773-2-2.664-.92-1.463-2.111-5.362.943-6.978C66.325.9,69.3,4.022,69.954,4.838c.578.706,1.75,2.272,1.838,2.432.149.251.224.044.224.044a28.787,28.787,0,0,1,1.492-4.2A5.668,5.668,0,0,1,79.445.082c4.182.782,4.339,5,4.008,6.551a19.74,19.74,0,0,1-1.019,3.142c-.029.069,0,.08.055.044C82.81,9.669,84.3,8.94,85.9,8.256c1.591-.667,4.517-.646,3.771,2.6" transform="translate(-49.103 0)"/><path d="M545.707,55.147a3.735,3.735,0,0,1-1.632.312,4.49,4.49,0,1,1,.012-8.979,4.042,4.042,0,0,1,1.62.3v1.886a3.208,3.208,0,0,0-1.5-.324,2.621,2.621,0,1,0,0,5.241,3.358,3.358,0,0,0,1.5-.3Z" transform="translate(-449.189 -38.699)"/><path d="M585.334,50.97a4.536,4.536,0,1,1,4.524,4.5,4.4,4.4,0,0,1-4.524-4.5m7.058,0a2.525,2.525,0,1,0-2.534,2.638,2.512,2.512,0,0,0,2.534-2.638" transform="translate(-487.336 -38.699)"/><path d="M658.981,46.9v8.747h-.22l-5.8-4.941v4.871h-1.979V46.826h.22l5.785,4.906V46.9Z" transform="translate(-541.996 -38.987)"/><path d="M711.327,54.94V53.181a2.911,2.911,0,0,0,1.759.579c1.076,0,1.55-.544,1.55-1.076,0-.44-.243-.81-.879-1.122l-.868-.428a2.394,2.394,0,0,1-1.574-2.152c0-1.446,1.284-2.5,3.3-2.5a3.53,3.53,0,0,1,1.632.312v1.759a2.734,2.734,0,0,0-1.423-.393c-.879,0-1.4.347-1.4.891,0,.359.22.6.752.856l.833.417a2.527,2.527,0,0,1,1.655,2.372c0,1.5-1.076,2.777-3.367,2.777a3.516,3.516,0,0,1-1.967-.532" transform="translate(-592.225 -38.7)"/><path d="M753.815,52.216V47.241h2.025v4.987a1.929,1.929,0,1,0,3.853,0V47.241h2.025v4.975a3.952,3.952,0,0,1-7.9,0" transform="translate(-627.609 -39.332)"/><path d="M819.5,54.16v1.759h-4.594V47.241h2.025V54.16Z" transform="translate(-678.473 -39.332)"/><path d="M845.795,49h-1.932V47.241h5.878V49h-1.921v6.919h-2.025Z" transform="translate(-702.581 -39.332)"/><path d="M883.391,50.97a4.536,4.536,0,1,1,4.524,4.5,4.4,4.4,0,0,1-4.524-4.5m7.058,0a2.525,2.525,0,1,0-2.534,2.638,2.512,2.512,0,0,0,2.534-2.638" transform="translate(-735.492 -38.699)"/><path d="M954.156,55.919l-1.342-2.5c-.2.012-.405.023-.625.023a6.184,6.184,0,0,1-1.1-.093v2.569h-2.048V47.241h3.564c2.268,0,3.575,1.111,3.575,2.974a2.862,2.862,0,0,1-1.481,2.661l1.655,3.043Zm-.046-5.6c0-.81-.463-1.308-1.7-1.308H951.09v2.7a5.759,5.759,0,0,0,1.041.081c1.365,0,1.979-.509,1.979-1.469" transform="translate(-790.151 -39.332)"/><rect width="2.013" height="8.678" transform="translate(167.95 7.909)"/><path d="M1031.339,54.589h-3.066l-.544,1.352h-2.2l4.154-8.674h.231l4.154,8.674h-2.187Zm-1.539-3.9-.96,2.407h1.932Z" transform="translate(-853.833 -39.353)"/><path d="M1112.331,51.592c0,2.7-1.973,4.588-5.067,4.588a9.33,9.33,0,0,1-2.837-.4V47.237h3.082c2.919,0,4.822,1.856,4.822,4.355m-2.055.047a2.535,2.535,0,0,0-2.732-2.6h-1.156v5.254a9.219,9.219,0,0,0,1.144.082,2.558,2.558,0,0,0,2.744-2.732" transform="translate(-919.521 -39.328)"/><path d="M1166.7,54.166v1.758h-5.874V47.247h5.792v1.759h-3.881v1.573h3.695v1.643h-3.695v1.944Z" transform="translate(-966.478 -39.337)"/><path d="M1001.589,34.987V33.845l2.86-.6v1.219Z" transform="translate(-833.901 -27.68)"/><path d="M665.52,150.749a8.026,8.026,0,0,0-5.83,2.107q-2.178,2.107-2.178,6.322v19.106q0,4.286,2.037,6.357a8.67,8.67,0,0,0,11.45-.176q2.176-2.247,2.177-6.533v-2.739h-5.057v3.231a6.011,6.011,0,0,1-.7,3.126,2.368,2.368,0,0,1-2.178,1.159,2.433,2.433,0,0,1-2.072-.878,4.456,4.456,0,0,1-.667-2.7v-.211a19.718,19.718,0,0,1,.141-2.669,4.911,4.911,0,0,1,.7-1.9,7.045,7.045,0,0,1,1.756-1.826l3.372-2.669a14.541,14.541,0,0,0,3.793-4.18,9.938,9.938,0,0,0,1.264-5.022v-1.475q0-4.355-2-6.392t-6.006-2.037m2.739,9.975a9.349,9.349,0,0,1-.632,3.617,8.412,8.412,0,0,1-2.318,2.985l-2.318,1.967a3.179,3.179,0,0,0-.281.259V158.476a4.455,4.455,0,0,1,.737-2.775,2.474,2.474,0,0,1,2.072-.948,2.38,2.38,0,0,1,2.037.948,4.625,4.625,0,0,1,.7,2.775Z" transform="translate(-547.43 -125.51)"/><path d="M775.69,182.977V153.686h-5.2v29.5a6.348,6.348,0,0,0,1.4,4.425,5.133,5.133,0,0,0,4,1.545,6.374,6.374,0,0,0,2.739-.562v-3.372h-1.054q-1.9,0-1.9-2.248" transform="translate(-641.494 -127.956)"/><path d="M834.067,182.977V153.686h-5.2v29.5a6.348,6.348,0,0,0,1.405,4.425,5.133,5.133,0,0,0,4,1.545,6.375,6.375,0,0,0,2.739-.562v-3.372h-1.054q-1.9,0-1.9-2.248" transform="translate(-690.098 -127.956)"/><path d="M895.64,150.749a8.026,8.026,0,0,0-5.83,2.107q-2.178,2.107-2.177,6.322v19.106q0,4.286,2.037,6.357a8.67,8.67,0,0,0,11.449-.176q2.176-2.247,2.177-6.533v-2.739h-5.057v3.231a6.01,6.01,0,0,1-.7,3.126,2.368,2.368,0,0,1-2.178,1.159,2.433,2.433,0,0,1-2.072-.878,4.458,4.458,0,0,1-.667-2.7v-.211a19.718,19.718,0,0,1,.141-2.669,4.912,4.912,0,0,1,.7-1.9,7.045,7.045,0,0,1,1.756-1.826l3.372-2.669a14.542,14.542,0,0,0,3.793-4.18,9.939,9.939,0,0,0,1.264-5.022v-1.475q0-4.355-2-6.392t-6.006-2.037m2.739,9.975a9.35,9.35,0,0,1-.632,3.617,8.411,8.411,0,0,1-2.318,2.985l-2.318,1.967a3.179,3.179,0,0,0-.281.259V158.476a4.455,4.455,0,0,1,.737-2.775,2.474,2.474,0,0,1,2.072-.948,2.38,2.38,0,0,1,2.037.948,4.625,4.625,0,0,1,.7,2.775Z" transform="translate(-739.023 -125.51)"/><path d="M1002.778,183.531a9.48,9.48,0,0,1,.492-3.02,28.13,28.13,0,0,1,1.685-3.792l5.407-10.112a15.825,15.825,0,0,0,1.615-4.459,29.229,29.229,0,0,0,.421-5.372v-3.09H998V157.9h9.41v1.124a8.017,8.017,0,0,1-.456,2.739q-.458,1.264-1.58,3.581l-.281.492-5.267,10.042a16.547,16.547,0,0,0-1.65,4.529,28.079,28.079,0,0,0-.456,5.442v2.879h14.817v-4.213h-9.761Z" transform="translate(-830.681 -127.956)"/><path d="M552.347,168.64a12.842,12.842,0,0,0,2.787-3.308,7.8,7.8,0,0,0,.95-3.694v-.915a6.252,6.252,0,0,0-2.357-5.137,9.626,9.626,0,0,0-6.227-1.9h-7.388v35.042h8.3a8.4,8.4,0,0,0,6.157-2.428,8.758,8.758,0,0,0,2.287-6.368v-1.759a11.5,11.5,0,0,0-1.583-5.84,15.818,15.818,0,0,0-2.927-3.693m-5.27-10.943a3.911,3.911,0,0,1,2.779,1.02,3.536,3.536,0,0,1,1.091,2.709v.633a6.179,6.179,0,0,1-.6,2.85,10.229,10.229,0,0,1-2.357,2.709l-2.533,2.252c-.12.107-.237.219-.352.334V157.7Zm4.5,22.517a4.572,4.572,0,0,1-1.161,3.272,4.1,4.1,0,0,1-3.131,1.231h-2.181v-6.262a7.657,7.657,0,0,1,.633-3.588,13.1,13.1,0,0,1,2.744-2.956l.64-.538a7.582,7.582,0,0,1,1.753,2.473,13.679,13.679,0,0,1,.7,4.961Z" transform="translate(-449.684 -127.956)"/><path d="M1114.615,152.821a7.5,7.5,0,0,0-5.655-2.072,7.628,7.628,0,0,0-5.8,2.248q-2.144,2.249-2.142,6.532v2.74h4.987v-3.231a6,6,0,0,1,.7-3.126,2.43,2.43,0,0,1,2.248-1.159,2.34,2.34,0,0,1,2.037.878,4.658,4.658,0,0,1,.632,2.7v.211a19.881,19.881,0,0,1-.141,2.669,4.932,4.932,0,0,1-.7,1.9,7.5,7.5,0,0,1-1.686,1.826l-3.372,2.669a14.551,14.551,0,0,0-3.793,4.179,9.942,9.942,0,0,0-1.264,5.022v1.475q0,4.356,2,6.392t5.936,2.037a8,8,0,0,0,5.865-2.107q2.142-2.107,2.142-6.322V159.178q0-4.284-2-6.357m-3.863,28.94a2.551,2.551,0,0,1-2.142.948,2.286,2.286,0,0,1-2-.948,4.8,4.8,0,0,1-.667-2.775v-2.248a9.832,9.832,0,0,1,.6-3.617,8.019,8.019,0,0,1,2.283-2.985l2.388-1.967a3.736,3.736,0,0,0,.281-.295v11.112a4.453,4.453,0,0,1-.737,2.775" transform="translate(-916.395 -125.51)"/></g><rect width="3.074" height="52.863" transform="translate(69.146 7.909)"/></svg>`,
                    "width": 201,
                    "height": 62
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
}