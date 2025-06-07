type ShippingRate = {
  id: string;
  title: string;
  desc: string;
  delivery_time: string;
  fee: number;
};

export const getShippingRates = async (country: string): Promise<ShippingRate[]> => {
  return new Promise((resolve) => {
    const defaultRates: ShippingRate[] = [
      {
        id: "standard_flat_rate",
        title: "Standard International Rate",
        desc: `Standard delivery in ${country}`,
        delivery_time: "June 10",
        fee: 50,
      }
    ];

    const nigeriaRates: ShippingRate[] = [
      {
        id: "lagos_local",
        title: "Lagos Delivery",
        desc: "1–2 day delivery within Lagos",
        delivery_time: "June 4",
        fee: 7,
      },
      {
        id: "southwest",
        title: "South West Region",
        desc: "Delivery to cities like Ibadan, Abeokuta, Akure (2–3 days)",
        delivery_time: "June 5",
        fee: 10,
      },
      {
        id: "southeast",
        title: "South East Region",
        desc: "Delivery to cities like Enugu, Owerri, Aba (3–4 days)",
        delivery_time: "June 6",
        fee: 13,
      },
      {
        id: "northcentral",
        title: "North Central Region",
        desc: "Delivery to cities like Abuja, Ilorin, Jos (3–5 days)",
        delivery_time: "June 6",
        fee: 16,
      },
      {
        id: "northeast_northwest",
        title: "Northern Regions",
        desc: "Delivery to Kano, Kaduna, Maiduguri and surrounding areas (4–6 days)",
        delivery_time: "June 7",
        fee: 19,
      },
    ];

    resolve(country.toLowerCase() === "nigeria" ? nigeriaRates : defaultRates);
  });
};
