import React from 'react';

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Healthy Nutrition</h1>
      
      <h2 className="text-2xl font-bold mb-4">Essential Foods and Drinks for Health & Wellness</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold">1. Whole Grains (Fiber and Nutrients)</h3>
        <p>Goal: Provide long-lasting energy and fiber for digestion.</p>
        <p>Examples: Brown rice, quinoa, oats, whole wheat bread, barley.</p>
        <p>Benefits: Rich in fiber, helps maintain healthy blood sugar levels, supports heart health.</p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold">2. Lean Proteins (Muscle Building and Repair)</h3>
        <p>Goal: Promote muscle repair and growth.</p>
        <p>Examples: Chicken breast, turkey, fish (salmon, tuna), eggs, legumes (lentils, chickpeas), tofu, quinoa.</p>
        <p>Benefits: Supports muscle growth, repair, and overall body function.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">3. Healthy Fats (Brain and Heart Health)</h3>
        <p>Goal: Maintain a healthy heart and support brain function.</p>
        <p>Examples: Avocados, olive oil, nuts (almonds, walnuts), seeds (chia, flax), fatty fish (salmon, sardines).</p>
        <p>Benefits: Helps reduce inflammation, supports brain health, improves skin quality.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">4. Fruits and Vegetables (Vitamins, Minerals, and Antioxidants)</h3>
        <p>Goal: Boost immunity, support skin health, and prevent chronic diseases.</p>
        <p>Examples: Berries (blueberries, strawberries), leafy greens (spinach, kale), citrus fruits (oranges, lemons), tomatoes, bell peppers, carrots.</p>
        <p>Benefits: Rich in vitamins, minerals, and antioxidants that support overall health and reduce inflammation.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">5. Dairy or Dairy Alternatives (Bone Health)</h3>
        <p>Goal: Provide calcium and vitamin D for strong bones and teeth.</p>
        <p>Examples: Greek yogurt, cheese, plant-based milks (almond, soy, oat milk), tofu.</p>
        <p>Benefits: Supports bone health, provides probiotics for gut health.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">6. Hydration (Water and Healthy Drinks)</h3>
        <p>Goal: Keep the body hydrated, support metabolic functions, and maintain energy levels.</p>
        <p>Examples: Water, herbal teas (green tea, peppermint), coconut water, fresh juices (without added sugar).</p>
        <p>Benefits: Supports digestion, boosts energy, aids in detoxification, and improves skin health.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">7. Foods to Limit or Avoid</h3>
        <p>Goal: Minimize foods that can hinder overall health and wellness.</p>
        <p>Examples: Processed foods, sugary drinks, refined carbohydrates (white bread, pastries), excessive alcohol, fried foods.</p>
        <p>Why: These foods can contribute to weight gain, inflammation, and chronic diseases like diabetes and heart disease.</p>
      </section>

      <h2 className="text-2xl font-bold mb-4">Healthy Meal Plan Tips</h2>
      <ul className="list-disc ml-6">
        <li>Incorporate a variety of colorful fruits and vegetables into every meal.</li>
        <li>Choose whole grains instead of refined grains to ensure more fiber.</li>
        <li>Opt for lean protein sources like fish, chicken, and legumes.</li>
        <li>Use healthy fats such as olive oil and avocado instead of butter or processed oils.</li>
        <li>Drink water throughout the day and limit sugary beverages.</li>
        <li>Avoid processed foods and snacks with added sugar.</li>
      </ul>

      <p className="mt-6">By following these food and drink guidelines, you can support your overall health and wellness while fueling your body for daily activities and workouts.</p>
    </div>
  );
};

export default Nutrition;
