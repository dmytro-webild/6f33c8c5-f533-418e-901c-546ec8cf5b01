"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Collection",          id: "products"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="D Unique Fashion"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Style Redefined at D Unique"
      description="Premium clothing and accessories in the heart of Vijayawada. Visit us for the latest in fashion trends and personal service."
      testimonials={[
        {
          name: "Ravi Kumar",          handle: "@ravi",          testimonial: "Excellent collection and very friendly staff. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-mirror_1301-1468.jpg?_wi=1"},
        {
          name: "Priya Reddy",          handle: "@priya",          testimonial: "My go-to place for all fashion accessories in Vijayawada.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-women-standing-boutique_23-2147666176.jpg?_wi=1"},
        {
          name: "Sneha S.",          handle: "@sneha",          testimonial: "Beautiful variety and reasonable pricing. Love the store ambience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-best-friends-with-shopping-bags_329181-8012.jpg?_wi=1"},
        {
          name: "Anil Verma",          handle: "@anil",          testimonial: "Great experience, found exactly what I needed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-women-shopping_23-2149241329.jpg?_wi=1"},
        {
          name: "Kavya Devi",          handle: "@kavya",          testimonial: "One of the best boutique shops. Superb quality!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-smiling-happy-pretty-woman-with-excited-face-expression-sitting-cafe-with-shopping-bags-drinking-coffee_285396-9623.jpg?_wi=1"},
      ]}
      buttons={[
        {
          text: "Visit Us",          href: "#contact"},
        {
          text: "Browse Catalog",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-store-with-futuristic-concept-architecture_23-2150861874.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-mirror_1301-1468.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/excited-women-standing-boutique_23-2147666176.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-best-friends-with-shopping-bags_329181-8012.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-women-shopping_23-2149241329.jpg",          alt: "Customer"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-smiling-happy-pretty-woman-with-excited-face-expression-sitting-cafe-with-shopping-bags-drinking-coffee_285396-9623.jpg",          alt: "Customer"},
      ]}
      avatarText="Loved by 500+ happy shoppers in Vijayawada"
      marqueeItems={[
        {
          type: "text",          text: "Premium Quality"},
        {
          type: "text",          text: "Latest Trends"},
        {
          type: "text",          text: "Affordable Luxury"},
        {
          type: "text",          text: "Hand-picked Styles"},
        {
          type: "text",          text: "Unique Designs"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Experience D Unique"
      description="Located beside Hotel Minerva Grand in Mogalrajapuram, D Unique Fashion Store brings a curated collection of clothing and accessories to Vijayawada, focused on quality and trend-setting styles."
      bulletPoints={[
        {
          title: "Curated Style",          description: "Hand-picked pieces for every occasion."},
        {
          title: "Premium Quality",          description: "Focus on high-end fabrics and craftsmanship."},
        {
          title: "Expert Guidance",          description: "Dedicated service to help you find your look."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/manager-arranging-racks-with-clothes_482257-85378.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Evening Wear Dress",          price: "₹2,500",          imageSrc: "http://img.b2bpic.net/free-photo/shop-assistant-showing-party-dress-with-tag-customer-racks-with-clothes-woman-choosing-evening-wear-side-view-fashion-store-retail-concept_74855-11998.jpg"},
        {
          id: "2",          name: "Classic Gold Neckpiece",          price: "₹1,200",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-urban-modern-young-stylish-woman-girl-model-casual-jeans-shorts-cloth-outdoors-street-black-cap_158538-13455.jpg"},
        {
          id: "3",          name: "Silk Casual Top",          price: "₹1,800",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-spring-wardrobe-switch_23-2150478980.jpg"},
        {
          id: "4",          name: "Modern Jacket",          price: "₹3,200",          imageSrc: "http://img.b2bpic.net/free-photo/empty-modern-clothing-store-filled-with-formal-wear-designs_482257-93026.jpg"},
        {
          id: "5",          name: "Handmade Leather Bag",          price: "₹4,500",          imageSrc: "http://img.b2bpic.net/free-photo/small-purse-studio-still-life_23-2151046507.jpg"},
        {
          id: "6",          name: "Trendy Accessories Set",          price: "₹900",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-woman-straw-hat-posing-cozy-tropical-resort-near-pool_273443-3772.jpg"},
      ]}
      title="Our Latest Collection"
      description="Explore our curated range of clothing and accessories for every unique taste."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Fantastic Experience",          quote: "The best boutique store in the area.",          name: "Ravi Kumar",          role: "Regular Client",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-mirror_1301-1468.jpg?_wi=2"},
        {
          id: "2",          title: "Highly Recommend",          quote: "Love the unique styles available here.",          name: "Priya Reddy",          role: "Regular Client",          imageSrc: "http://img.b2bpic.net/free-photo/excited-women-standing-boutique_23-2147666176.jpg?_wi=2"},
        {
          id: "3",          title: "Premium Choice",          quote: "Quality is always top-notch.",          name: "Sneha S.",          role: "Fashion Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-best-friends-with-shopping-bags_329181-8012.jpg?_wi=2"},
        {
          id: "4",          title: "Great Staff",          quote: "Very polite and helpful service.",          name: "Anil Verma",          role: "Regular Client",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-women-shopping_23-2149241329.jpg?_wi=2"},
        {
          id: "5",          title: "Perfect Finds",          quote: "Found my perfect wedding dress here.",          name: "Kavya Devi",          role: "Regular Client",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-smiling-happy-pretty-woman-with-excited-face-expression-sitting-cafe-with-shopping-bags-drinking-coffee_285396-9623.jpg?_wi=2"},
      ]}
      title="What Our Customers Say"
      description="Read about the experiences of our valued customers in Vijayawada."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Visit Us"
      title="Find Us in Vijayawada"
      description="1st floor, Exit Gate, 40-1/1-17, opp. Pvp Road, beside Hotel Minerva Grand, Mogalrajapuram, Sidhartha Nagar, Labbipet, Vijayawada. Call: 093920 47583."
      buttons={[
        {
          text: "Call Now",          href: "tel:+919392047583"},
        {
          text: "WhatsApp Us",          href: "https://wa.me/919392047583"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "All Products",              href: "#products"},
            {
              label: "New Arrivals",              href: "#products"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Call Us",              href: "tel:+919392047583"},
            {
              label: "WhatsApp",              href: "https://wa.me/919392047583"},
          ],
        },
        {
          title: "Location",          items: [
            {
              label: "Mogalrajapuram",              href: "#contact"},
            {
              label: "Vijayawada",              href: "#contact"},
          ],
        },
      ]}
      copyrightText="© 2024 D Unique Fashion Store. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
