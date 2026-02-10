const menuData = [
    // Burgers
    {
        id: 1,
        name: "Classic Chicken Burger",
        category: "burgers",
        price: 79,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        description: "Juicy grilled chicken patty with fresh veggies"
    },
    {
        id: 2,
        name: "Cheese & Mayo Burger",
        category: "burgers",
        price: 99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
        description: "Loaded with cheese and creamy mayo"
    },
    {
        id: 3,
        name: "Zinger Crunch Burger",
        category: "burgers",
        price: 119,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
        description: "Crispy fried chicken with spicy zinger sauce"
    },
    {
        id: 4,
        name: "Tandoori Tikka Burger",
        category: "burgers",
        price: 129,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500",
        description: "Tandoori marinated chicken with mint chutney"
    },
    {
        id: 5,
        name: "Malai Tikka Burger",
        category: "burgers",
        price: 139,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
        description: "Creamy malai tikka with special sauce"
    },
    {
        id: 6,
        name: "Maharaja Burger",
        category: "burgers",
        price: 159,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500",
        description: "Double patty royal burger with premium toppings"
    },

    // Combo Meals
    {
        id: 7,
        name: "Cheese & Mayo Burger Meal",
        category: "combos",
        price: 159,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500",
        description: "Burger + Fries + Drink combo"
    },
    {
        id: 8,
        name: "Zinger Crunch Meal",
        category: "combos",
        price: 179,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500",
        description: "Zinger burger with sides and beverage"
    },
    {
        id: 9,
        name: "Malai Tikka Meal",
        category: "combos",
        price: 189,
        image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500",
        description: "Malai tikka burger complete meal"
    },
    {
        id: 10,
        name: "Maharaja Meal",
        category: "combos",
        price: 249,
        image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500",
        description: "Premium maharaja burger meal deal"
    },

    // Wraps
    {
        id: 11,
        name: "Malai Tikka Wrap",
        category: "wraps",
        price: 139,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        description: "Creamy malai tikka wrapped in soft roti"
    },
    {
        id: 12,
        name: "Tandoori Wrap",
        category: "wraps",
        price: 149,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
        description: "Smoky tandoori chicken wrap"
    },
    {
        id: 13,
        name: "Seekh Kebab Wrap",
        category: "wraps",
        price: 159,
        image: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=500",
        description: "Spiced seekh kebab in a wrap"
    },
    {
        id: 14,
        name: "Crispy Zinger Wrap",
        category: "wraps",
        price: 169,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500",
        description: "Crispy fried chicken with zinger sauce"
    },

    // Snacks
    {
        id: 15,
        name: "Chicken Popcorn",
        category: "snacks",
        price: 119,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500",
        description: "Bite-sized crispy chicken pieces"
    },
    {
        id: 16,
        name: "Chicken Strips",
        category: "snacks",
        price: 129,
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500",
        description: "Golden fried chicken strips"
    },
    {
        id: 17,
        name: "Popcorn + Fries",
        category: "snacks",
        price: 149,
        image: "https://images.unsplash.com/photo-1630431341973-02e1d0f45e79?w=500",
        description: "Perfect combo of popcorn and fries"
    },
    {
        id: 18,
        name: "Nuggets",
        category: "snacks",
        price: 169,
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=500",
        description: "Crispy chicken nuggets"
    },
    {
        id: 19,
        name: "Chicken Lollipop",
        category: "snacks",
        price: 169,
        image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36e?w=500",
        description: "Spicy Indo-Chinese chicken lollipops"
    },
    {
        id: 20,
        name: "Crispy Chicken Legs",
        category: "snacks",
        price: 249,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500",
        description: "Perfectly fried chicken drumsticks"
    },

    // Biryani
    {
        id: 21,
        name: "Hyderabadi Chicken Biryani",
        category: "biryani",
        price: 149,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        description: "Authentic Hyderabadi style biryani"
    },
    {
        id: 22,
        name: "Shahi Kebab Biryani",
        category: "biryani",
        price: 169,
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
        description: "Royal biryani with kebab pieces"
    },
    {
        id: 23,
        name: "Malai Tikka Biryani",
        category: "biryani",
        price: 189,
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500",
        description: "Creamy malai tikka layered biryani"
    },
    {
        id: 24,
        name: "Tandoori Biryani",
        category: "biryani",
        price: 179,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=500",
        description: "Tandoori chicken biryani"
    },
    {
        id: 25,
        name: "Chicken Mandi Half",
        category: "biryani",
        price: 349,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
        description: "Arabian style mandi rice with half chicken"
    },
    {
        id: 26,
        name: "Chicken Mandi Full",
        category: "biryani",
        price: 599,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        description: "Full chicken mandi with aromatic rice"
    },

    // Starters
    {
        id: 27,
        name: "Chicken Seekh Kabab",
        category: "starters",
        price: 79,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500",
        description: "Minced chicken kebabs on skewers"
    },
    {
        id: 28,
        name: "Chicken Malai Tikka",
        category: "starters",
        price: 179,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
        description: "Creamy marinated grilled chicken"
    },
    {
        id: 29,
        name: "Chicken Tandoori (Quarter)",
        category: "starters",
        price: 149,
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500",
        description: "Classic tandoori chicken quarter"
    },
    {
        id: 30,
        name: "Chicken Tandoori (Half)",
        category: "starters",
        price: 279,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
        description: "Half tandoori chicken"
    },
    {
        id: 31,
        name: "Chicken Tandoori (Full)",
        category: "starters",
        price: 549,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500",
        description: "Full tandoori chicken"
    },
    {
        id: 32,
        name: "Chicken Al Fahm (Quarter)",
        category: "starters",
        price: 149,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500",
        description: "Arabian grilled chicken quarter"
    },
    {
        id: 33,
        name: "Chicken Al Fahm (Half)",
        category: "starters",
        price: 279,
        image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36e?w=500",
        description: "Half Al Fahm chicken"
    },
    {
        id: 34,
        name: "Chicken Al Fahm (Full)",
        category: "starters",
        price: 549,
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500",
        description: "Full Al Fahm chicken"
    },
    {
        id: 35,
        name: "Chicken Afghani (Quarter)",
        category: "starters",
        price: 169,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
        description: "Afghani style grilled chicken"
    },
    {
        id: 36,
        name: "Chicken Afghani (Half)",
        category: "starters",
        price: 299,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500",
        description: "Half Afghani chicken"
    },
    {
        id: 37,
        name: "Chicken Afghani (Full)",
        category: "starters",
        price: 579,
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500",
        description: "Full Afghani chicken"
    },

    // Main Course
    {
        id: 38,
        name: "Lemon Tawa Chicken (Half)",
        category: "mains",
        price: 169,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        description: "Tangy lemon flavored tawa chicken"
    },
    {
        id: 39,
        name: "Lemon Tawa Chicken (Full)",
        category: "mains",
        price: 319,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=500",
        description: "Full portion lemon tawa chicken"
    },
    {
        id: 40,
        name: "Lemon Tawa Chicken (Family)",
        category: "mains",
        price: 599,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
        description: "Family size lemon tawa chicken"
    },
    {
        id: 41,
        name: "Butter Chicken (Half)",
        category: "mains",
        price: 169,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        description: "Creamy butter chicken curry"
    },
    {
        id: 42,
        name: "Butter Chicken (Full)",
        category: "mains",
        price: 319,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500",
        description: "Full portion butter chicken"
    },
    {
        id: 43,
        name: "Butter Chicken (Family)",
        category: "mains",
        price: 599,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        description: "Family size butter chicken"
    },
    {
        id: 44,
        name: "Chicken Rara (Half)",
        category: "mains",
        price: 249,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=500",
        description: "Spicy chicken rara curry"
    },
    {
        id: 45,
        name: "Chicken Rara (Full)",
        category: "mains",
        price: 499,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
        description: "Full portion chicken rara"
    },
    {
        id: 46,
        name: "White Kaju Keema (Half)",
        category: "mains",
        price: 249,
        image: "https://images.unsplash.com/photo-1585937421612-70e008356f33?w=500",
        description: "Creamy cashew minced chicken"
    },
    {
        id: 47,
        name: "White Kaju Keema (Full)",
        category: "mains",
        price: 499,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        description: "Full portion kaju keema"
    },

    // Mutton
    {
        id: 48,
        name: "Mutton Rara",
        category: "mutton",
        price: 369,
        image: "https://images.unsplash.com/photo-1585937421612-70e008356f33?w=500",
        description: "Rich and spicy mutton rara"
    },
    {
        id: 49,
        name: "Mutton Raan",
        category: "mutton",
        price: 1999,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        description: "Slow cooked whole leg of mutton"
    },

    // Breads
    {
        id: 50,
        name: "Tandoori Roti",
        category: "breads",
        price: 8,
        image: "https://images.unsplash.com/photo-1619365562461-0e2a0c6c0c87?w=500",
        description: "Fresh tandoori roti"
    },
    {
        id: 51,
        name: "Butter Roti",
        category: "breads",
        price: 10,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
        description: "Butter brushed tandoori roti"
    },
    {
        id: 52,
        name: "Lachha Paratha",
        category: "breads",
        price: 20,
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500",
        description: "Layered flaky paratha"
    },

    // Drinks
    {
        id: 53,
        name: "Mojito",
        category: "drinks",
        price: 79,
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
        description: "Refreshing mint mojito"
    },
    {
        id: 54,
        name: "Blue Lagoon",
        category: "drinks",
        price: 79,
        image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=500",
        description: "Tropical blue lagoon drink"
    },
    {
        id: 55,
        name: "Watermelon",
        category: "drinks",
        price: 79,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784210?w=500",
        description: "Fresh watermelon juice"
    },
    {
        id: 56,
        name: "Green Apple",
        category: "drinks",
        price: 79,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
        description: "Tangy green apple drink"
    }
];
