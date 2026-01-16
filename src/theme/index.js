import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const customTabs = {
  ...baseTheme.components.Tabs,
  variants: {
    ...baseTheme.components.Tabs.variants,
    line: {
      ...baseTheme.components.Tabs.variants.line,
      tab: {
        ...baseTheme.components.Tabs.variants.line.tab,
        _focus: {
          outline: "none",
        },
        _hover: {
          borderColor: "gray.300",
        },
        _selected: {
          color: "purple.500",
          border: "none",
        },
      },
    },
  },
};

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },
    fonts: {
      heading: `Ubuntu`,
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "30px",
          md: "32px",
        },
        color: "p.black",
        lineHeight: {
          base: "30px",
          md: "32px",
        },
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.black",
        lineHeight: { base: "24px", md: "28px" },
      },

      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
        },
        color: "p.black",

        lineHeight: { base: "22px", md: "24px" },
      },

      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.black",
        lineHeight: { base: "20px", md: "22px" },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.black",
        lineHeight: { base: "18px", md: "20px" },
      },
      h6: {
        fontSize: {
          base: "12px",
          md: "14px",
        },
        color: "p.black",
        lineHeight: { base: "16px", md: "18px" },
      },
      p2: {
        fontSize: {
          base: "12px",
        },
        color: "p.black",
        lineHeight: { base: "16px"},
      },
      p3: {
        fontSize: {
          base: "10px",
        },
        color: "p.black",
        lineHeight: { base: "14px"},
      },
    },

    fontSizes: {
      xs: "10px",
      sm: "12px",
      base: { base: "14px", md: "16px" },
      lg: { base: "16px", md: "18px" },
      xl: { base: "18px", md: "20px" },
      "2xl": { base: "20px", md: "22px" },
      "3xl": { base: "22px", md: "26px" },
      "4xl": { base: "28px", md: "30px" },
    },
    styles: {
      global: {
        body: {
          bg: "#F3F3F7",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          pl:"2",
          pr:"2",
          maxH:"35px",
          fontWeight: "bold",
          borderRadius: "10px",
          _focus: {
            outline: "none",
          },
          _hover: {
            outline: "none",
          },
        },
      },
      Tabs: customTabs,
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
              pb: "0",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",
            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);