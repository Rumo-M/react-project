import React from 'react';

const Workout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Workout Plan</h1>
      
      <h2 className="text-2xl font-bold mb-4">Types of Workouts for Health & Wellness</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold">1. Strength Training (Muscle Building)</h3>
        <p>Goal: Build muscle, increase strength, improve metabolism.</p>
        <p>Examples: Bodyweight exercises, weight training (dumbbells, barbells), resistance bands.</p>
        <p>Frequency: 2-4 times per week, focusing on different muscle groups.</p>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold">2. Cardio Workouts (Endurance and Fat Burning)</h3>
        <p>Goal: Improve cardiovascular health, burn fat, increase stamina.</p>
        <p>Examples: Running, cycling, HIIT, swimming, jump rope.</p>
        <p>Frequency: 3-5 times per week, or 2-3 times for HIIT.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">3. Flexibility and Mobility (Stretching and Recovery)</h3>
        <p>Goal: Improve flexibility, reduce injury risk, aid muscle recovery.</p>
        <p>Examples: Yoga, Pilates, static stretching, foam rolling.</p>
        <p>Frequency: Daily or 3-4 times a week.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">4. Balance and Coordination (Core Stability)</h3>
        <p>Goal: Enhance balance, improve posture, reduce injury risk.</p>
        <p>Examples: Balance exercises, core workouts (planks, crunches), Tai Chi.</p>
        <p>Frequency: 2-3 times a week.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">5. Functional Fitness (Daily Movement and Mobility)</h3>
        <p>Goal: Improve day-to-day movements and mobility.</p>
        <p>Examples: Deadlifts, squats, kettlebell swings, lunges.</p>
        <p>Frequency: 2-3 times a week.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold">6. Active Rest and Recovery (Restorative Workouts)</h3>
        <p>Goal: Allow muscles to recover while staying active.</p>
        <p>Examples: Walking, light swimming, stretching, restorative yoga.</p>
        <p>Frequency: Active rest days between intense workouts.</p>
      </section>

      <h2 className="text-2xl font-bold mb-4">Sample Weekly Workout Plan</h2>
      <ul className="list-disc ml-6">
        <li><strong>Monday</strong>: Strength Training (Full Body)</li>
        <li><strong>Tuesday</strong>: Cardio (Running or HIIT) + Stretching</li>
        <li><strong>Wednesday</strong>: Yoga or Pilates (Flexibility)</li>
        <li><strong>Thursday</strong>: Strength Training (Upper Body)</li>
        <li><strong>Friday</strong>: Cardio (Cycling or Swimming)</li>
        <li><strong>Saturday</strong>: Core and Balance Workouts</li>
        <li><strong>Sunday</strong>: Active Rest (Walking, Stretching, or Light Yoga)</li>
      </ul>

      <p className="mt-6">This workout routine helps balance strength, cardio, flexibility, and recovery for overall health and wellness.</p>
    </div>
  );
};

export default Workout;
