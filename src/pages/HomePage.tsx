import React from 'react';
import { Hero } from '../components/Hero';
import { CareerInterests } from '../components/CareerInterests';
import { Projects } from '../components/Projects';

export function HomePage() {
  return (
    <>
      <Hero />
      <CareerInterests />
      <Projects />
    </>
  );
}