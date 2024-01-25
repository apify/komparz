
> This Actor is a copycat of Google Maps Scraper. Same input schema, but does nothing at all.
> If needed, update it from the Google Maps repo.

## 📍 What is Google Maps Scraper?

This tool expands Google Maps data extraction beyond the official [Google Places API](https://developers.google.com/places/web-service/search)'s limitations. It offers greater speed and enables scraping of various details like names, contact info, reviews, popular times, ratings, geolocation, and more. You can scrape by search query, location, coordinates, or URL, targeting a few places, a city, or an entire area.

### 🗺 How can I use Google Maps Scraper?
This tool can be used on the Apify platform or locally; it covers the following **features**:

- Scraping data from Google Maps - by URL or search query
- Getting over the [limitation of Google Maps](https://blog.apify.com/google-maps-how-to-overcome-google-api-limit-120-places/#what-are-google-maps-limitations-%E2%9B%94) of showing no more than 120 places per map
- [Defining search area](https://apify.com/compass/crawler-google-places#define-the-search-area) for scraping by country, state, US county, city, or postal code
- Scraping areas by coordinates and arbitrary locations present on OpenStreetMap
- Language & translation settings
- [City-focused scraping](https://apify.com/compass/crawler-google-places#deeper-city-scrape)
- [Automatic zooming](https://apify.com/compass/crawler-google-places#automatic-zooming-to-overcome-the-google-maps-limit) by searched area
- Reviews scraping, sorting and filtering
- Browser & scraping configuration
- API, webhooks and integrations with other tools
- Visual representation of scraped data on a map

With this unofficial Google Maps API, you can extract all of the following data from Google Maps: (**see many more output examples in [Output examples](https://apify.com/compass/crawler-google-places#output-example) ⬇️**). Here's the amount of data you'd get for a single scraped place (<a href="https://www.google.com/maps/place/Kim's+Island/@40.5107736,-74.2482624,17z/data=!4m6!3m5!1s0x89c3ca9c11f90c25:0x6cc8dba851799f09!8m2!3d40.5107736!4d-74.2482624!16s%2Fg%2F1tmgdcj8?hl=en&entry=ttu">this one</a>
📍 so you can compare)

<br>

Example of 1 scraped restaurant in New York:

```json
{
  "url": "https://www.google.com/maps/place/Kim's+Island/@40.5107736,-74.2482624,17z/data=!4m6!3m5!1s0x89c3ca9c11f90c25:0x6cc8dba851799f09!8m2!3d40.5107736!4d-74.2482624!16s%2Fg%2F1tmgdcj8?hl=en&entry=ttu",
  "searchString": null,
  "rank": null,
  "searchPageUrl": null,
  "searchPageLoadedUrl": null,
  "isAdvertisement": false,
  "title": "Kim's Island",
  "description": null,
  "price": "$",
  "categoryName": "Chinese restaurant",
  "address": "175 Main St, Staten Island, NY 10307, United States",
  "neighborhood": "Tottenville",
  "street": "175 Main St",
  "city": "Staten Island",
  "postalCode": "10307",
  "state": "New York",
  "countryCode": "US",
  "website": "http://kimsislandsi.com/",
  "phone": "+1 718-356-5168",
  "phoneUnformatted": "+17183565168",
  "claimThisBusiness": false,
  "location": {
    "lat": 40.5107736,
    "lng": -74.2482624
  },
  "locatedIn": null,
  "plusCode": "GQ62+8M New York, USA",
  "menu": "http://kimsislandsi.com/",
  "totalScore": 4.6,
  "permanentlyClosed": false,
  "temporarilyClosed": false,
  "placeId": "ChIJJQz5EZzKw4kRCZ95UajbyGw",
  "categories": [
    "Chinese restaurant",
    "Meal delivery"
  ],
  "cid": "7838756667406262025",
  "reviewsCount": 83,
  "reviewsDistribution": {
    "oneStar": 3,
    "twoStar": 3,
    "threeStar": 3,
    "fourStar": 9,
    "fiveStar": 65
  },
  "imagesCount": 28,
  "scrapedAt": "2023-06-13T18:05:20.602Z",
  "reserveTableUrl": null,
  "googleFoodUrl": null,
  "hotelStars": null,
  "hotelDescription": null,
  "checkInDate": null,
  "checkOutDate": null,
  "similarHotelsNearby": null,
  "openingHours": [
    {
      "day": "Monday",
      "hours": "Closed"
    },
    {
      "day": "Tuesday",
      "hours": "11 AM to 9:30 PM"
    },
    {
      "day": "Wednesday",
      "hours": "11 AM to 9:30 PM"
    },
    {
      "day": "Thursday",
      "hours": "11 AM to 9:30 PM"
    },
    {
      "day": "Friday",
      "hours": "11 AM to 10:30 PM"
    },
    {
      "day": "Saturday",
      "hours": "11 AM to 10:30 PM"
    },
    {
      "day": "Sunday",
      "hours": "12 to 9:30 PM"
    }
  ],
  "peopleAlsoSearch": [
    {
      "category": "People also search for",
      "title": "Peking Taste",
      "reviewsCount": 53,
      "totalScore": 3.5
    },
    {
      "category": "People also search for",
      "title": "New Island",
      "reviewsCount": 94,
      "totalScore": 4
    },
    {
      "category": "People also search for",
      "title": "Chef Hong II",
      "reviewsCount": 114,
      "totalScore": 4.3
    },
    {
      "category": "People also search for",
      "title": "Pacific Kitchen",
      "reviewsCount": 99,
      "totalScore": 4.4
    },
    {
      "category": "People also search for",
      "title": "Foo Sing",
      "reviewsCount": 44,
      "totalScore": 4
    }
  ],
  "placesTags": [],
  "reviewsTags": [
    {
      "title": "prices",
      "count": 6
    },
    {
      "title": "delivery",
      "count": 4
    },
    {
      "title": "spareribs",
      "count": 3
    }
  ],
  "additionalInfo": {
    "Service options": [
      {
        "Delivery": true
      },
      {
        "Takeaway": true
      },
      {
        "Dine-in": true
      }
    ],
    "Popular for": [
      {
        "Lunch": true
      },
      {
        "Dinner": true
      },
      {
        "Solo dining": true
      }
    ],
    "Accessibility": [
      {
        "Wheelchair-accessible entrance": true
      }
    ],
    "Offerings": [
      {
        "Comfort food": true
      },
      {
        "Healthy options": true
      },
      {
        "Quick bite": true
      },
      {
        "Small plates": true
      }
    ],
    "Dining options": [
      {
        "Lunch": true
      },
      {
        "Dinner": true
      }
    ],
    "Amenities": [
      {
        "Good for kids": true
      }
    ],
    "Atmosphere": [
      {
        "Casual": true
      }
    ],
    "Payments": [
      {
        "Credit cards": true
      },
      {
        "Debit cards": true
      },
      {
        "NFC mobile payments": true
      },
      {
        "Credit cards": true
      }
    ]
  },
  "gasPrices": [],
  "questionsAndAnswers": null,
  "updatesFromCustomers": null,
  "webResults": [],
  "orderBy": [
    {
      "name": "kimsislandsi.com",
      "url": "http://kimsislandsi.com/"
    }
  ],
  "imageUrls": [],
  "reviews": []
}
```

## 💰 How much will scraping Google Maps cost you?

In our experience, **you can get between 15,000 and 20,000 results** within the [$49 Starter plan](https://apify.com/pricing). However, when it comes to scraping, it can be challenging to estimate the resources needed to extract data as use cases may vary significantly. That's why the best course of action is to run a test scrape with a small sample of input data and limited output. You’ll get your price per scrape, which you’ll then have to multiply by the number of scrapes you intend to do.

[Watch this video](https://www.youtube.com/watch?v=-wyz2iscZ30) for a few helpful tips. And don't forget that choosing a higher plan will save you money in the long run.

## ⬇️ Input example

The input for Google Maps Scraper should be **either a Google Maps URL or a location + search term combo.** You can also set up extracting any details on top such as images, reviews, amenities, and so on. For a full explanation of input, head over to the [input tab](https://apify.com/compass/crawler-google-places/input-schema).

You can set up the input programmatically or use the fields in scraper’s interface:

<img width="80%" src="https://i.imgur.com/lgLSnRs.png" />

## ⬆️ Output example

The results will be wrapped into a dataset which you can find in the **Storage** tab. Note that the output is organized in table and tabs for viewing convenience:

<img width="100%" src="https://github.com/natashalekh/natashalekh.github.io/blob/main/Google%20Maps%20data%20extraction%20.gif?raw=true" /> <br>

Once the run is finished, you can download the dataset in various data formats (JSON, CSV, Excel, and more). Note that you can always set up additional fields for specific Google Maps data.

The scraper also automatically creates a map page that visualizes the scraped places and stores that into the Key-Value Store of the run.

<img width="80%" src="https://i.imgur.com/aOFVuef.jpg" />


This is what you’d get for:

**⭐️ Reviews**

```json
"reviews": [
{
"name": "Richard Chan",
"text": "This place has incredible service. The food here is great and the dumplings are immaculate. All the staff members are incredibly nice and friendly. You can also tell that they reguraly change their oil based on the taste. They also offer to bring my food out too me due to me being to big to fit through the door. This place is a 10/10 and I would recommend friends and family coming to eat in this place.",
"textTranslated": null,
"publishAt": "11 months ago",
"publishedAtDate": "2022-06-16T18:22:02.601Z",
"likesCount": 3,
"reviewId": "ChdDSUhNMG9nS0VJQ0FnSUNPcmE2YXRRRRAB",
"reviewUrl": "[https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNPcmE2YXRRRRAB!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgICOra6atQE|CgwIyumtlQYQkMDpngI|?hl=en-US](https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNPcmE2YXRRRRAB!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgICOra6atQE%7CCgwIyumtlQYQkMDpngI%7C?hl=en-US)",
"reviewerId": "115487239877451343603",
"reviewerUrl": "https://www.google.com/maps/contrib/115487239877451343603?hl=en-US",
"reviewerPhotoUrl": "https://lh3.googleusercontent.com/a-/AD_cMMQGyF65ajOtgVF4ZKuZzRG3eUVDn_8szr_z8_Z5yw=s120-c-c0x00000000-cc-rp-mo-br100",
"reviewerNumberOfReviews": 3,
"isLocalGuide": false,
"stars": 5,
"rating": null,
"responseFromOwnerDate": null,
"responseFromOwnerText": null,
"reviewImageUrls": [],
"reviewContext": {},
"reviewDetailedRating": {},
"visitedIn": "Visited in December",
},
{
"name": "Katelyn Cohen",
"text": "I been going here for 11 years me and my family love the food it has good prices I go here all the time best place to get Chinese food in the world and NY",
"textTranslated": null,
"publishAt": "2 years ago",
"publishedAtDate": "2020-12-24T01:36:17.156Z",
"likesCount": 3,
"reviewId": "ChdDSUhNMG9nS0VJQ0FnSURTNXMzdjRnRRAB",
"reviewUrl": "[https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURTNXMzdjRnRRAB!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgIDS5s3v4gE|CgsIkeGP_wUQ4OfsSg|?hl=en-US](https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURTNXMzdjRnRRAB!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgIDS5s3v4gE%7CCgsIkeGP_wUQ4OfsSg%7C?hl=en-US)",
"reviewerId": "104641749393917170180",
"reviewerUrl": "https://www.google.com/maps/contrib/104641749393917170180?hl=en-US",
"reviewerPhotoUrl": "https://lh3.googleusercontent.com/a-/AD_cMMTLvYjsXUTaz6yor82bzCHi-ACXeo5-Ypzb0dWuP_8=s120-c-c0x00000000-cc-rp-mo-br100",
"reviewerNumberOfReviews": 2,
"isLocalGuide": false,
"stars": 5,
"rating": null,
"responseFromOwnerDate": "2021-01-23T20:14:35.853Z",
"responseFromOwnerText": "Thank you for your support and trust,it’s our pleasure!😊",
"reviewImageUrls": [
"https://lh5.googleusercontent.com/p/AF1QipPP1aUFXkKd56fIPq_1QzEPICaJ9XcT9gf3lIZU=w150-h150-k-no-p",
"https://lh5.googleusercontent.com/p/AF1QipPP56i_SEY_Rz-qRk_iwTZv24Dg9bTpJspmI59C=w150-h150-k-no-p"
],
"reviewContext": {},
"reviewDetailedRating": {},
"visitedIn": "Visited in December",
},
{
"name": "Christina Salama",
"text": "Have been coming here for years! Always friendly and helpful! Great service and delicious food",
"textTranslated": null,
"publishAt": "5 months ago",
"publishedAtDate": "2022-12-16T02:37:24.946Z",
"likesCount": 1,
"reviewId": "ChZDSUhNMG9nS0VJQ0FnSUNCcUp2Y0JREAE",
"reviewUrl": "[https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNCcUp2Y0JREAE!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgICBqJvcBQ|CgwI5LPvnAYQwLHEwwM|?hl=en-US](https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNCcUp2Y0JREAE!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgICBqJvcBQ%7CCgwI5LPvnAYQwLHEwwM%7C?hl=en-US)",
"reviewerId": "107079941106356720274",
"reviewerUrl": "https://www.google.com/maps/contrib/107079941106356720274?hl=en-US",
"reviewerPhotoUrl": "https://lh3.googleusercontent.com/a/AAcHTtcZ8bW36vEbd-UNwJN4xeEKwUR9LFp4o3xCFD55=s120-c-c0x00000000-cc-rp-mo-br100",
"reviewerNumberOfReviews": 4,
"isLocalGuide": false,
"stars": 5,
"rating": null,
"responseFromOwnerDate": null,
"responseFromOwnerText": null,
"reviewImageUrls": [],
"reviewContext": {},
"reviewDetailedRating": {},
"visitedIn": "Visited in December",
},
{
"name": "Elliot G",
"text": "Best place in Tottenville area.  Foods allways good. And comes on time.",
"textTranslated": null,
"publishAt": "4 months ago",
"publishedAtDate": "2023-01-29T19:03:54.247Z",
"likesCount": 1,
"reviewId": "ChdDSUhNMG9nS0VJQ0FnSURCdThTZGdRRRAB",
"reviewUrl": "[https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURCdThTZGdRRRAB!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgIDBu8SdgQE|CgsImobbngYQsJ2Gdg|?hl=en-US](https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURCdThTZGdRRRAB!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgIDBu8SdgQE%7CCgsImobbngYQsJ2Gdg%7C?hl=en-US)",
"reviewerId": "115712866476698751099",
"reviewerUrl": "https://www.google.com/maps/contrib/115712866476698751099?hl=en-US",
"reviewerPhotoUrl": "https://lh3.googleusercontent.com/a/AAcHTtcmtD3El7qpPzYpvFS4UuJNaCLkQauNzn1DyLk=s120-c-c0x00000000-cc-rp-mo-br100",
"reviewerNumberOfReviews": 7,
"isLocalGuide": false,
"stars": 5,
"rating": null,
"responseFromOwnerDate": null,
"responseFromOwnerText": null,
"reviewImageUrls": [],
"reviewContext": {},
"reviewDetailedRating": {
"Food": 4,
"Service": 5,
"Atmosphere": 4,
"visitedIn": "Visited in December",
}
},
{
"name": "Joan",
"text": "I just ordered the boneless spareribs combo. I just want you to know the spareribs were great, but the fried rice tastes disgusting. Maybe it is old and shouldn't be used anymore or it was just a bad day.",
"textTranslated": null,
"publishAt": "10 months ago",
"publishedAtDate": "2022-08-02T22:06:02.619Z",
"likesCount": 0,
"reviewId": "ChZDSUhNMG9nS0VJQ0FnSUN1dGVPU0xBEAE",
"reviewUrl": "[https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN1dGVPU0xBEAE!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgICuteOSLA|CgwIyr-mlwYQqJWwpwI|?hl=en-US](https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN1dGVPU0xBEAE!2m1!1s0x0:0x6cc8dba851799f09!3m1!1s2@1:CIHM0ogKEICAgICuteOSLA%7CCgwIyr-mlwYQqJWwpwI%7C?hl=en-US)",
"reviewerId": "110503721202693066085",
"reviewerUrl": "https://www.google.com/maps/contrib/110503721202693066085?hl=en-US",
"reviewerPhotoUrl": "https://lh3.googleusercontent.com/a-/AD_cMMRBEvlPnwYci5HvAjwaNVFl6hIRk7oMc6r86Gmp=s120-c-c0x00000000-cc-rp-mo-br100",
"reviewerNumberOfReviews": 9,
"isLocalGuide": false,
"stars": 3,
"rating": null,
"responseFromOwnerDate": null,
"responseFromOwnerText": null,
"reviewImageUrls": [],
"reviewContext": {
"Service": "Delivery",
"Meal type": "Dinner",
"Price per person": "$10–20",
"visitedIn": "Visited in November",
},
"reviewDetailedRating": {}
},
]
```

**📊 Popular times**

```json
"popularTimesHistogram": {
    "Su": [
        {
            "hour": 6,
            "occupancyPercent": 0
        },
        // etc...
    ],
    "Mo": [
        {
            "hour": 6,
            "occupancyPercent": 0
        },
        // etc...
    ],
    // etc...
},

```

**⌚️ Opening hours**

```json
"openingHours": [
    {
        "day": "Monday",
        "hours": "10:30 AM to 11 PM"
    },
    {
        "day": "Tuesday",
        "hours": "10:30 AM to 11 PM"
    },
    {
        "day": "Wednesday",
        "hours": "10:30 AM to 11 PM"
    },
    {
        "day": "Thursday",
        "hours": "10:30 AM to 11 PM"
    },
    {
        "day": "Friday",
        "hours": "10:30 AM to 12 AM"
    },
    {
        "day": "Saturday",
        "hours": "11 AM to 12 AM"
    },
    {
        "day": "Sunday",
        "hours": "11 AM to 10 PM"
    }
]

```

**🧑‍🦽Additional info**

```json
"additionalInfo": {
    "Service options": [
        {
            "Outdoor seating": true
        },
        {
            "Delivery": true
        },
        {
            "Takeout": true
        },
        {
            "Dine-in": true
        }
    ],
    "Accessibility": [
        {
            "Wheelchair accessible entrance": true
        },
        {
            "Wheelchair accessible parking lot": true
        },
        {
            "Wheelchair accessible restroom": true
        },
        {
            "Wheelchair accessible seating": true
        }
    ],
    "Offerings": [
        {
            "Alcohol": true
        },
        {
            "Beer": true
        },
        {
            "Coffee": true
        },
        {
            "Happy hour food": true
        },
        {
            "Hard liquor": true
        },
        {
            "Wine": true
        }
    ],
    "Dining options": [
        {
            "Lunch": true
        },
        {
            "Dinner": true
        },
        {
            "Dessert": true
        },
        {
            "Seating": true
        }
    ],
    "Amenities": [
        {
            "Bar onsite": true
        },
        {
            "Good for kids": true
        },
        {
            "Restroom": true
        },
        {
            "Free Wi-Fi": true
        }
    ],
    "Atmosphere": [
        {
            "Casual": true
        },
        {
            "Cozy": true
        }
    ],
    "Crowd": [
        {
            "Groups": true
        }
    ],
    "Planning": [
        {
            "Accepts reservations": true
        }
    ],
    "Payments": [
        {
            "Debit cards": true
        },
        {
            "NFC mobile payments": true
        },
        {
            "Credit cards": true
        }
    ]
}

```

**🏨 Hotels**

```json
"moreHotelsOptions": [
  {
    "url": "<https://www.booking.com/hotel/us/pittsburgh-3454-forbes.html?&checkin=2023-03-10&checkout=2023-03-11&group_adults=2&req_adults=2&show_room=33940104_356536769_2_2_0&lang=en&selected_currency=USD&exrt=1.00000000&ext_price_total=345.21&ext_price_tax=42.39&xfc=USD&group_children=0&req_children=0&&exfcam=_2&ts=1673860104&no_rooms=1&utm_source=metagha&utm_medium=mapresults&utm_campaign=US&utm_term=hotel-339401&utm_content=dev-desktop_los-1_bw-53_dow-Friday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20230310_&aid=2127489&label=metagha-link-MRUS-hotel-339401_dev-desktop_los-1_bw-53_dow-Friday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20230310_>",
    "title": "Booking.com",
    "price": "$303"
  },
  {
  "url": "<https://www.hotels.com/Hotel-Search?selected=118998&startDate=2023-03-10&endDate=2023-03-11&>",
  "title": "Hotels.com",
  "price": "$303"
  },
],
"similarHotelsNearby": [
  {
    "name": "Residence U Malvaz",
    "rating": 4.3,
    "reviews": 406,
    "description": "Cozy hotel offering a restaurant",
    "price": "$70"
  },
  {
    "name": "Hotel U Zlatého Stromu",
    "rating": 3.6,
    "reviews": 656,
    "description": "Refined rooms, plus breakfast & dining",
    "price": "$64"
  },
],
"hotelReviewSummary": {
    "overall": {
        "rating": 4.3,
        "rooms": {
            "rating": 3.4,
            "reviews": [
                "Guests liked the large rooms, though some said they were dated & maintenance could be improved",
                "Rooms had views",
                "Some guests mentioned bathroom cleanliness could be improved"
            ]
        },
        "location": {
            "rating": 4.35,
            "reviews": [
                "Near the city center; shopping, sightseeing, restaurants & bars nearby",
                "Near public transit & the train station",
                "Easily accessible by car"
            ]
        },
        "servicesAndFacilities": {
            "rating": 4.2,
            "reviews": [
                "Guests appreciated the friendly, professional staff",
                "Conference space",
                "Some guests said management could be improved"
            ]
        }
    },
},
"hotelAds": [
    {
        "title": "Quality Inn & Suites North Mesquite I-30",
        "googleUrl": "http://www.google.com/travel/clk?pc=AA80OsyEKcU8peDzfXQPvpUG67kThVMYt85_l5PBUvzONEzm22E30zXIXryhMcv0fx-v-vXnQGIgqZhdJEtg4KHVb9yU_i2purmPtJJGGfRHGdvoAOBSb5Es6Q97G5hl&pcurl=https://travel-productads.koddi.com/PropertyAdvocateAPI/ClickRedirect?client%3DChoice%26channel%3DGHPA%26placement%3Dmapresults%26campaign%3D%26hotel%3DTXM53%26destinationUrl%3Dhttps://www.choicehotels.com/TXM53-rates?checkInDate%3D2023-10-31%26checkOutDate%3D2023-11-01%26srp%3DSAPR1%26adults%3D2%26minors%3D0%26mc%3DHAGOHPUS%26meta%3DPMFGPADUSSAPR1_TXM53_mapresults_UA_1_desktop_2023-10-31_default___organic%26gal%3D%26pmf%3Dhpagoogle%26gpa%3DGPADSAPR1%26rooms%3D1%26gmp%3DMetaOrganic%26product%3Dmapresults",
        "isOfficialSite": true,
        "price": "UAH 3,301",
        "url": "https://travel-productads.koddi.com/PropertyAdvocateAPI/ClickRedirect?client=Choice&channel=GHPA&placement=mapresults&campaign=&hotel=TXM53&destinationUrl=https://www.choicehotels.com/TXM53-rates?checkInDate=2023-10-31&checkOutDate=2023-11-01&srp=SAPR1&adults=2&minors=0&mc=HAGOHPUS&meta=PMFGPADUSSAPR1_TXM53_mapresults_UA_1_desktop_2023-10-31_default___organic&gal=&pmf=hpagoogle&gpa=GPADSAPR1&rooms=1&gmp=MetaOrganic&product=mapresults"
    },
    {
        "title": "Priceline",
        "googleUrl": "http://www.google.com/travel/clk?pc=AA80OswzeSZnWc2GmNOarZNhUy6VjtVUcK1-PukCoK5E2QdYOn4bEYCV0qiVDdVrP9_peY2pAak4rl0np9-nJvvmPkrqrfQodCIXRy5j9HGCzrNnTtR14xh3oEmD3_dWOIfMiVY&pcurl=https://www.priceline.com/r/?channel%3Dmeta%26product%3Dhotel%26theme%3Dghalistings%26refid%3DPLGOOGLEMSS%26refclickid%3DUA_HP%257C1355603_mapresults_1%257C20231031%257Cdesktop%257Cdefaultdate%7Cpublic%7C%7C%7C13%257C2%257C0%7C0%26hotelid%3D1355603%26checkin%3D20231031%26checkout%3D20231101%26rooms%3D1%26currency%3DUSD%26displayedCurr%3DUAH%26pOSCountryCode%3DUA%26taxDisplayMode%3DBP%26cityid%3D3000021516%26adults%3D2%26land%3DL%26metaid%3DjEaTJFi32p0SD8afEYFLBreXOYQj6zSfalpufEB8GYEio8Cydl0_T3F5VOCbPgeEqSvUJXpBrn1qr1wMxewrNLQaT-ZaAl5KC29DC8VOxBTlhK42D_VSf0bdeeFXnEjk3JO0RbUY4vmkCdlkpWaG76n4VGXSe-4zBDpLMKdOyzP5WX1T8Fly6Mi_Cd-cxKmxkCinAwZb_UmvSj0pJm9zq1SfiyGSg_ZU8g6M_DmKnfBYQBUfoaKycD9i9qSIIq7DggIm4b_xNveZdVmSnfFzIw%26dblcnt%3Dtrue%26user_num_adults%3D2%26pdtax%3D358.54%26pdt%3D3117.80",
        "isOfficialSite": false,
        "price": "UAH 3,118",
        "url": "https://www.priceline.com/r/?channel=meta&product=hotel&theme=ghalistings&refid=PLGOOGLEMSS&refclickid=UA_HP|1355603_mapresults_1|20231031|desktop|defaultdate|public|||13|2|0|0&hotelid=1355603&checkin=20231031&checkout=20231101&rooms=1&currency=USD&displayedCurr=UAH&pOSCountryCode=UA&taxDisplayMode=BP&cityid=3000021516&adults=2&land=L&metaid=jEaTJFi32p0SD8afEYFLBreXOYQj6zSfalpufEB8GYEio8Cydl0_T3F5VOCbPgeEqSvUJXpBrn1qr1wMxewrNLQaT-ZaAl5KC29DC8VOxBTlhK42D_VSf0bdeeFXnEjk3JO0RbUY4vmkCdlkpWaG76n4VGXSe-4zBDpLMKdOyzP5WX1T8Fly6Mi_Cd-cxKmxkCinAwZb_UmvSj0pJm9zq1SfiyGSg_ZU8g6M_DmKnfBYQBUfoaKycD9i9qSIIq7DggIm4b_xNveZdVmSnfFzIw&dblcnt=true&user_num_adults=2&pdtax=358.54&pdt=3117.80"
    }
]
```

**✍️ Updates from customers**

```json
"updatesFromCustomers": {
    "text": "Disneyland California Adventure small area with large park all inclusive celebrations. This is a glimpse into Los Reyes parade.  I'm a true fan. Thanks",
    "language": "en",
    "postDate": "a week ago",
    "postedBy": {
        "name": "Kayla Arredondo",
        "url": "<https://www.google.com/maps/contrib/102968882116587973980?hl=en-US>",
        "title": "Local Guide",
        "totalReviews": 225
    },
    "media": [
        {
            "link": "<https://lh3.googleusercontent.com/ggms/AF1QipNNaoT0NSbcWOPSduvZNqJ0kSqUs-dod32FeBtr=m18>",
            "postTime": "a week ago"
        }
    ]
}

```

**❓Questions and answers**

```json
"questionsAndAnswers": {
    "question": "Which is the best easier way to drop off a family to Disneyland Park",
    "answer": "best way for drop off family is at down town Disney. Drop them off then you can take a short walk to the park. ",
    "askDate": "5 years ago",
    "askedBy": {
        "name": "Cecilia Salcedo",
        "url": "<https://www.google.com/maps/contrib/109041536347893604294>"
    },
    "answerDate": "5 years ago",
    "answeredBy": {
        "name": "Gabby Lujan",
        "url": "<https://www.google.com/maps/contrib/105966144333216697667>"
    }
}

```

**🌐 Web results**

```json
"webResults": [
    {
        "title": "Hotel & restaurant SIGNAL, Pardubice – Updated 2023 Prices",
        "displayedUrl": "<https://www.booking.com> › hotel › signal",
        "description": "Located 1.2 mi from Pardubice city center, this hotel offers a ... Josefa Janáčka 708, Pardubice, 53012, Czech Republic – Great location - show map."
    },
    {
        "title": "Hotel & restaurant SIGNAL, Pardubice - Booking.com",
        "displayedUrl": "<https://www.booking.com> › signal.en-gb.html",
        "description": "Located 2 km from Pardubice city centre, this hotel offers a traditional ... Josefa Janáčka 708, Pardubice, 53012, Czech Republic – Great location - show ..."
    },
    {
        "title": "Hotel & restaurant SIGNAL, Pardubice - 2023 Reviews ...",
        "displayedUrl": "<https://www.agoda.com> › ... › Pardubice Hotels",
        "description": "Hotel & restaurant SIGNAL. Josefa Janáčka 708, Pardubice III, Pardubice, Czech Republic, 53012 - See map."
    }
],

```

**🏩 External places (hotels)** <br>
Google sometimes shows these places when searching in certain locations, mainly for hotels. They are however not regular places with pins on the map and offer only some of the regular output fields. These places are marked with 3 extra output fields:

```json
{
  "url": "https://www.google.com/maps/place/Al Eairy Furnished Apartments Al Madinah 9/@24.4857006,39.6083984,14z/data=!3m1!4b1!4m9!3m8!5m2!4m1!1i2!8m2!3d24.4857006!4d39.6083984!16s%2Fg%2F11pkhzvq1s!17BQ0FF",
  "isExternalServicePlace": true,
  "externalServiceProvider": "SuperTravel",
  "externalId": "/g/11pkhzvq1s"
}
```

## 🧑‍🏫 How do I use Google Maps Scraper?

To understand how to set up and run the scraper, you can follow our [step-by-step guide](https://blog.apify.com/step-by-step-guide-to-scraping-google-maps/) or [watch a short video tutorial](https://www.youtube.com/watch?v=Wzfo3qSSbtU)  ▷ on YouTube.

[google maps scraper - how to extract data from google maps](https://www.youtube.com/watch?v=tVJS0hAAu7A)

You can also follow our extended guide on how to use the Google Maps Scraper [geolocation features](https://blog.apify.com/google-maps-how-to-overcome-google-api-limit-120-places/) (scraping by coordinates or applying map zoom) 🛰 .

### Location, country, state, county, city, and postal code

Using free text `locationQuery` (or **Location** field) should normally be enough. But you can instead use a combination of `country`, `state`, `county`,  `city`, and `postalCode` if **Location** isn’t specific enough for your search.

This scraper uses Open Street Map for geolocation API. You can easily check the location matching your geolocation input on the [official Open Street Map page](https://nominatim.openstreetmap.org/ui/search.html?city=new%20york).

#### 📡 Define the search area

This section will teach you to customize geolocation features, overcome the 120 results limit or skip large areas such as lakes or forests. You can also follow this [video guide](https://youtu.be/op9MabaZNZo) or this [step-by-step explanation](https://blog.apify.com/google-maps-how-to-overcome-google-api-limit-120-places/).

#### 🔎 Automatic zooming to overcome the Google Maps limit

If you look at Google Maps website, you’ll notice that when zooming out, you can see less of Google places pins. You'll also notice that zooming in on smaller areas (making zoom higher) can uncover many of those hidden pins. The advantage of higher zoom is that it can find - and scrape - more places (shown as pins). However, locations with higher zoom also take significantly longer to scrape and are more computationally expensive. Generally, there are diminishing returns for increasing zoom.

**By default, you don’t have to set up this parameter.** The scraper automatically zooms on the location on Google Maps to ensure the most efficient scraping based on the size of the scraped area. But of course, you can override the default `zoom`. `zoom` can be any number between 1 (a whole globe) and 21 (a few houses). Currently, example zoom values for various locations are (maximum for automatic is 17):

- United States - 10 zoom (10,371,139 km2)
- Germany - 12 zoom (380,878 km2)
- London - 15 zoom (1,595 km2)
- Manhattan - 16 zoom (87.5 km2)
- Soho - 17 zoom (0.35 km2)

If you need guidance on how to run the Google Maps Scraper with zoom, follow our [step-by-step tutorial](https://blog.apify.com/google-maps-how-to-overcome-google-api-limit-120-places/) 🔗 or [video guide](https://www.youtube.com/watch?v=op9MabaZNZo) ▷ on YouTube.

#### 🏙 Deeper city scrape

Enabling `deeperCityScrape` option enables you to extract **significantly more places from larger areas** because each city in the region usually has a thicker concentration of Google places. It also helps the Google Maps Scraper to skip areas without any population such as deserts, mountains, or oceans. The scraper simply won’t be wasting any of your time or compute units for those and will focus on the cities instead. This option is especially useful for scraping places in countries with vast unpopulated areas such as Australia or Canada.

Note that enabling this feature will increase the runtime (by extracting more places). This feature will likely become a default setting in the near future but is currently opt-in to allow for a smooth transition.

#### 🛰 Custom search area

If your location can’t be found on Google Maps or you want to customize it for a specific area, you can use the **Custom search area** function. You’ll have to provide coordinate pairs for an area and the scraper will create start URLs out of them. As an example, see the `geojson field` in [Nominatim Api](https://nominatim.openstreetmap.org/) ([example of Cambridge in Great Britain](https://nominatim.openstreetmap.org/search?country=united%20kingdom&state=&city=cambridge&postalcode=&format=json&polygon_geojson=1&limit=1&polygon_threshold=0.005)).

There are several types of search area geometry that you can use in Google Maps Scraper: `Polygon`, `MultiPolygon` and `Point` (Circle). All of them follow the official [Geo Json RFC](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.2) and all types are supported. We’ve found the polygons and circle to be the most useful ones when it comes to scraping.

> Note that the order of longitude and latitude is reversed in GeoJson 🔄 compared to the Google Maps website. **The first field must be longitude ↕️, the second field must be latitude ↔️.**

We recommend using [Geojson.io](https://geojson.io/#map=2/0/20) to create `customGeolocation` of any type/shape in correct format. You can [watch this video](https://www.tiktok.com/@apifytech/video/7231446296006020379?embed_source=121352282%2C121351166%2C121331973%2C120811592%2C120810756%3Bnull%3B) on how to use it together with our scraper.

**💠 Polygon**

The most common type is a polygon, which is a set of points that define the scraped area. Note that **the first and last pair of coordinates must be identical** (to close the polygon). This example covers most of the city of London, UK:

```json
{
    "type": "Polygon",
    "coordinates": [
        [
            [
                // Must be the same as last one
                -0.322813, // Longitude
                51.597165 // Latitude
            ],
            [
                -0.314990,
                51.388023
            ],
            [
                0.060493,
                51.389199
            ],
            [
                0.051936,
                51.600360
            ],
            [
                // Must be the same as the first one
                -0.322813,
                51.597165
            ]
        // ...
        ]
    ]
}

```

**💠💠 MultiPolygon**

MultiPolygon can combine more polygons that are not continuous together (can be an island + part of mainland). Same as with the polygon, make sure the first and the last pair of coordinates in each polygon are identical.

```json
{
    "type": "MultiPolygon",
    "coordinates": [
        [ // first polygon
            [
                [
                    12.0905752, // Longitude
                    50.2524063  // Latitude
                ],
                [
                    12.1269337,
                    50.2324336
                ],
                // ...
            ]
        ],
        [
            // second polygon
            // ...
        ]
    ]
}

```

**🔘 Circle**

For a circle, we can use the `Point` type with our custom parameter `radiusKm`.  Don't forget to change the radius to fit your needs. This example covers the city of Basel in Switzerland:

```json
{
    "type": "Point",
    "coordinates": ["7.5503", "47.5590"],
    "radiusKm": 8
}

```

## ❓FAQ

### 📚 Resources on how to scrape Google Maps

1. [Step-by-step guide](https://blog.apify.com/step-by-step-guide-to-scraping-google-maps/) on how to use Google Maps Scraper.
2. [Video tutorial ▷](https://www.youtube.com/watch?v=J43AX9wu-NI) on how to use Google Maps Scraper.
3. [Input tab](https://apify.com/drobnikj/crawler-google-places/input-schema) with all the technical parameters of this scraper.
4. [Is web scraping legal?](https://blog.apify.com/is-web-scraping-legal/) - your extended reference to ethical scraping.
5. [Step-by-step guide](https://blog.apify.com/google-maps-how-to-overcome-google-api-limit-120-places/) on how to use geolocation features.
6. [Video tutorial ▷](https://youtu.be/op9MabaZNZo) on how to use geolocation features.
7. [Platform pricing page](https://apify.com/pricing/actors) with pricing specifications.
8. [Video guide ▷](https://www.youtube.com/watch?v=-wyz2iscZ30) on how to choose the right subscription plan.
9. [Webinar on scraping Google Maps](https://www.youtube.com/watch?v=tVJS0hAAu7A) with detailed answers on data extraction cases from Google Maps.
10. [Comprehensive guide on Google Maps scraping](https://blog.apify.com/google-maps-scraping-manual/): images, restaurants, franchises, placeid, scraping the places from the whole country or city.

#### What Google Maps data can I scrape?

With this Google Maps scraper, what you see is what you get. You can use this tool to get the following data from Google Maps:

<table>
  <tr>
    <td>🔗 Title/name </td>
    <td>📝 Subtitle, category, place ID, and URL</td>
  </tr>
  <tr>
    <td>📍 Address</td>
    <td>🌍 Location, plus code and exact coordinates</td>
  </tr>
  <tr>
    <td>☎️ Phone</td>
    <td>🌐 Website, if available</td>
  </tr>
  <tr>
    <td>🏷 Menu</td>
    <td>💲 Price bracket</td>
  </tr>
  <tr>
    <td>🔒 Temporarily or permanently closed status</td>
    <td>⛽️ Gas prices</td>
  </tr>
  <tr>
    <td>⭐️ Average rating (<code>totalScore</code>)</td>
    <td>📊 Review count and review distribution</td>
  </tr>
  <tr>
    <td>➕ List of detailed characteristics (<code>additionalInfo</code>)</td>
    <td>📸 List of images</td>
  </tr>
  <tr>
    <td>🧑‍🍳 Opening hours</td>
    <td>⌚️ Popular times - histogram & live occupancy</td>
  </tr>

  <tr>
    <td>🏨 Hotel booking URL and price + nearby hotels</td>
    <td>🔍 People also search</td>
  </tr>
  <tr>
    <td>🙋 Updates from customers & Questions and answers</td>
    <td>🌐 Web results</td>
  </tr>
</table>


#### Can I use the Google Maps scraper to extract Google reviews?

Yes. This Google Maps scraper also supports the extraction of detailed information about reviews on Google Maps. Note that Personal data extraction about reviewers is also possible but has to be **explicitly** enabled in input (see the [Legality of scraping Google Maps](https://apify.com/compass/crawler-google-places#is-it-legal-to-scrape-google-maps) section).

<table>
<tr>
<td>📝 Review text</td>
<td>📅 Published date</td>
</tr>
<tr>
<td>🌟 Stars</td>
<td>🆔 Review ID & URL</td>
</tr>
<tr>
<td>✅ Response from the owner - text</td>
<td>📷 List of review images</td>
</tr>
<tr>
<td>💬 Review context</td>
<td>📊 Detailed rating per service</td>
</tr>

<tr>
<td>🧛 Reviewer’s name </td>
<td>✍️ Reviewer’s number of reviews</td>
</tr>

<tr>
<td>🖼 Reviewer’s ID, URL & photo </td>
<td>👋 <code>IsLocalGuide</code></td>
</tr>
</table>

<br>

#### How does Google Maps Scraper work?

It works exactly as if you were searching through Google Maps and copying information from each page you find. It opens the [Google Maps website](https://www.google.com/maps/), goes to a specified location, then writes your search query into the search bar. Then it scrolls down until it reaches the final page or `maxCrawledPlacesPerSearch`. It enqueues all the places as separate pages and then copypastes all visible data into an organized document. To understand the process fully, just try it out in your browser - the scraper does exactly the same thing, only much faster.

#### Can I scrape places from multiple locations?

While Google Maps Scraper supports only single location query, you can use [Google Maps Scraper Orchestrator](https://apify.com/lukaskrivka/google-maps-scraper-orchestrator) to scrape multiple locations with a single list. It will automatically run the Google Maps Scraper for each location in the list and merge the results. It also fully uses your Apify account memory for maximum speed.

#### How can I increase the speed of the scraper?

You can increase the run memory up to 32 GB per run. To speed up the scraping even more, you can run several runs at once to fully utilize all your account memory. To make this simpler, you can use the [Google Maps Scraper Orchestrator](https://apify.com/lukaskrivka/google-maps-scraper-orchestrator) to split locations or search terms over multiple runs, deduplicate the results and collect them to a single dataset.

#### How can I visualize the scraped results?

Google Maps Scraper provides a visual map page that renders the scraped places. You can zoom in and out to for different granulatity. The map is shown in the `"Live View"` tab on the actor run page and also stored in the Key-Value Store as `results-map.html` record.

<img width="80%" src="https://i.imgur.com/YSWRlyO.png" />

#### What are the disadvantages of the Google Maps API?

With the Google Maps API, you get $200 worth of credit usage every month free of charge. That means 28,500 map loads per month. However, the **Google Maps API caps your search results to 60**, regardless of the radius you specify. So, if you want to scrape data for bars in New York, for example, you'll get results for only 60 of the thousands of bars in the area.

**Google Maps Scraper imposes no rate limits or quotas** and provides more cost-effective, comprehensive results, and also scrapes histograms for popular times, which aren't available in the official API.

#### Is it legal to scrape Google Maps data?

Web scraping is legal if you are extracting publicly available data which is most data on Google Maps. However, you should **respect boundaries such as personal data** and intellectual property regulations. You should only scrape personal data if you have a legitimate reason to do so, and you should also factor in Google's [Terms of Use](https://policies.google.com/terms?hl=en).

#### Want to build your own Google Maps scraper?

Google Maps Scraper doesn’t exactly do what you need? You can always build your own! We have various [scraper templates](https://apify.com/templates) in Python, JavaScript, and TypeScript to get you started. Alternatively, you can write it from scratch using our [open-source library Crawlee](https://crawlee.dev/). You can keep the scraper to yourself or make it public by adding it to Apify Store (and [find users](https://blog.apify.com/make-regular-passive-income-developing-web-automation-actors-b0392278d085/) for it).

Or let us know if you need a custom [web scraping solution](https://apify.com/custom-solutions).

#### What are other tools for scraping Google Maps services?

Use the dedicated scrapers below if you want to scrape specific Google Maps data. Each of them is built particularly for the relevant map scraping case be it reviews only, gas prices, OCR from pins, or itineraries. Feel free to browse them:

<table>
<tr>
<td>📩 <a href="https://apify.com/lukaskrivka/google-maps-with-contact-details">Google Maps Email Extractor</a></td>
<td>⭐️ <a href="https://apify.com/zenisjan/google-maps-reviews-scraper">Google Maps Reviews Scraper</a></td>
</tr>
<tr>
<td>📍 <a href="https://apify.com/alexey/google-maps-radar-search">Google Places API Radar Search</a></td>
<td>⛽️ <a href="https://apify.com/natasha.lekh/gas-prices-scraper">Gas Prices Scraper</a></td>
</tr>
</table>

#### How can I get one review per row in the output?

If you need to view reviews in a table with each review in a separate row, you can click on the **Reviews (if any)** Export dataset view.

To use this view via API, you need to add `&view=reviews` to the dataset export URL. E.g.  `https://api.apify.com/v2/datasets/DATASET_ID/items?clean=true&format=json&view=reviews`

If you don't use the **Reviews (if any)** view, each output place item will contain a maximum of 5,000 reviews (in table format, it means a lot of columns). So if there are more reviews for that place, a duplicate place will be stored with the next 5,000 reviews, and so on. For instance, in a case of 50,000 reviews, the resulting dataset will have 10 items for the same place. We have this limitation due to the size limit of a single item in the Apify dataset.


#### Can I integrate Google Maps Scraper with other apps?

Last but not least, Google Maps Scraper can be connected with almost any cloud service or web app thanks to  <a href="https://apify.com/integrations"  target="_blank"> integrations on the Apify platform</a>. You can integrate with Make, Zapier, Slack, Airbyte, GitHub, Google Sheets, Google Drive, <a href="https://docs.apify.com/integrations"  target="_blank"> and more</a>. Or you can use <a href="https://docs.apify.com/integrations/webhooks"  target="_blank"> webhooks</a> to carry out an action whenever an event occurs, e.g. get a notification whenever Google Maps Scraper successfully finishes a run.

#### Can I use Google Maps Scraper with the API?

The Apify API gives you programmatic access to the Apify platform. The API is organized around RESTful HTTP endpoints that enable you to manage, schedule, and run Apify actors. The API also lets you access any datasets, monitor actor performance, fetch results, create and update versions, and more.

To access the API using Node.js, use the `apify-client` NPM package. To access the API using Python, use the `apify-client` PyPI package.

Check out the <a href="https://docs.apify.com/api/v2"  target="_blank"> Apify API reference</a> docs for full details or click on the <a href="https://apify.com/compass/crawler-google-places/api"  target="_blank"> API tab</a> for code examples or <a href="https://www.youtube.com/watch?v=ViYYDHSBAKM"  target="_blank">this videoguide</a>.

#### What can I use the extracted data from Google Maps for?

📊 Create a potential customer base and prospection files

🔍 Find new clients

🎯 Generate leads

🔎 Search and analyze businesses similar to yours

📈 Monitor brand sentiment and service quality, and identify fake reviews

🛒 Find where to buy products

🌍 Analyze geospatial data for scientific or engineering work

💼 Develop a working market strategy

#### Your feedback

We’re always working on improving the performance of our Actors. So if you’ve got any technical feedback for Google Maps Scraper or simply found a bug, please create an issue on the Actor’s [Issues tab](https://console.apify.com/actors/nwua9Gu5YrADL7ZDj/issues) in Apify Console.