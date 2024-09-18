import React, { useState } from 'react';
import img1 from "../../assets/images/chikencurry.webp"; // Update with the correct path to your image

function Whychooseus() {
  const [visible, setVisible] = useState(Array(6).fill(false)); // Initialize visibility state for all dishes

  const toggleVisibility = (index) => {
    setVisible(visible.map((v, i) => (i === index ? !v : v))); // Toggle visibility for specific dish
  };

  const dishes = [
    {
      name: 'Chicken Karahi',
      date: '10 April 2024',
      img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/03/close-up-of-butter-chicken-indian-dish.jpg', // New Image for Chicken Karahi
      brief: 'A flavorful dish made with chicken, tomatoes, and spices cooked in a wok-like pan called Karahi.',
      description:
        'Chicken Karahi is one of Pakistan’s most popular dishes, known for its rich flavors. It is often served with naan or rice. The spices include garlic, ginger, cumin, and coriander, which enhance its unique taste.'
    },
    {
      name: 'Biryani',
      date: '12 April 2024',
      img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/healthy-vegan-curry-rice.jpg', // New Image for Biryani
      brief: 'A famous rice dish, layered with meat, potatoes, and spices, popular across Pakistan.',
      description:
        'Biryani is a fragrant rice dish cooked with layers of marinated meat and potatoes. Originating from South Asia, it has become a national favorite in Pakistan, available in various styles like Karachi and Lahori.'
    },
    {
      name: 'Nihari',
      date: '14 April 2024',
      img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/05/thai-red-curry-chicken.jpg', // New Image for Nihari
      brief: 'A slow-cooked beef stew, served with naan, often eaten as a breakfast dish.',
      description:
        'Nihari is a traditional slow-cooked beef stew, often served as a breakfast dish in Pakistan. Its deep flavors come from a mix of spices like cinnamon, cardamom, and cloves, and it is best enjoyed with naan.'
    },
    {
      name: 'Haleem',
      date: '16 April 2024',
      img: 'http://ts2.mm.bing.net/th?id=OIP.4x9Pa22ZOhKmiUtszenbVQAAAA&pid=15.1', // New Image for Haleem
      brief: 'A thick, savory porridge made with lentils, meat, and wheat, cooked for hours to perfection.',
      description:
        'Haleem is a popular comfort food in Pakistan, made by slow-cooking lentils, meat, and wheat until it forms a thick paste. It’s a hearty dish, garnished with fried onions, lemon, and coriander.'
    },
    {
      name: 'Chapli Kebab',
      date: '18 April 2024',
      img: 'https://www.foodiesfeed.com/wp-content/uploads/2023/04/shish-kebab-on-a-skewer-with-vegetables.jpg', // New Image for Chapli Kebab
      brief: 'A minced meat kebab, seasoned with spices, originating from the Khyber Pakhtunkhwa region.',
      description:
        'Chapli Kebab is a spicy minced meat patty, flavored with coriander, pomegranate seeds, and green chilies. It’s typically served with naan and chutney and is famous in the northern regions of Pakistan.'
    },
    {
      name: 'Sajji',
      date: '20 April 2024',
      img: 'data:image/jpeg;base64,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', // New Image for Sajji
      brief: 'A whole chicken stuffed with rice, marinated and slow-cooked over an open flame.',
      description:
        'Sajji is a Balochi dish, made by roasting a whole chicken marinated in spices over a slow flame. It is typically served with rice and is a delicacy from Pakistan’s Balochistan province.'
    }
  ];

  return (
    <div className="p-4 font-[sans-serif]">
      <div className="max-w-6xl mx-auto max-lg:max-w-3xl max-sm:max-w-sm">
        <div className="max-w-md mx-auto">
          <h2 className="mb-12 text-3xl font-extrabold leading-10 text-center text-gray-800">
            Famous Dishes of Pakistan
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="overflow-hidden bg-white rounded">
              <img
                src={dish.img}
                alt={dish.name}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-800">{dish.name}</h3>
                <p className="text-sm text-gray-500">{dish.brief}</p>
                <p className="text-gray-800 text-[13px] font-semibold mt-4">{dish.date}</p>
                <a
                  href="javascript:void(0);"
                  onClick={() => toggleVisibility(index)}
                  className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
                >
                  {visible[index] ? 'Read Less' : 'Read More'}
                </a>
                {visible[index] && (
                  <div className="p-4 mt-4 bg-gray-100 rounded">
                    <p className="text-sm text-gray-700">{dish.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
