import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why did Full Cycle Takeout start up?</Accordion.Header>
        <Accordion.Body>
          <p>Single-use takeout containers and food wrappers account for up to one-third of the debris found on Hawaiʻi’s shorelines!!</p>

          <p>Offering a reusable takeout container system helps to address this issue (and many others) while also cultivating circular and zero waste economies.</p>

          <p>There are numerous social, economic, and environmental benefits of supporting a reusable container program like Full Cycle Takeout. Product stewardship and community building are at the heart of Full Cycle Takeout’s
            mission.
          </p>

          <p>We’ve worked closely with community partners to design a waste-free takeout model that fits our local needs. We are excited to offer a program that will reduce costs for local restaurants by creating less rubbish to dispose of
            (yep, that costs $) and minimizing the amount of single-use items our restaurants have to purchase.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are some benefits of a reusable takeout container system?</Accordion.Header>
        <Accordion.Body>
          <p>Building reusable systems in food service creates “upstream” and “downstream” benefits for the environment and our communities. What does that mean?
          </p>

          <p>When we think of waste, we tend to focus on the waste that happens at the time of disposal, but “upstream” of that immediate waste is an extraction and production process that creates so much more. For every 1 pound of waste at
            disposal, there are 70 pounds of additional waste being generated “upstream.” *
          </p>

          <p>Replacing disposables with reusables in food service means that the vast majority of that “upstream” waste was never created. This is called “proactive waste management” and means we are living in the first two Rs (reduce and
            reuse)!
          </p>

          <p>“Downstream” of disposal is what happens to waste after we toss it. In a reusable container program, removing disposables from takeout prevents any additional waste and its negative impacts from ever existing. This means no
            single-use containers piling up for years in landfills, or being incinerated creating toxic emissions, residue and ash. This is an important part of environmental justice, because low income communities and communities of color
            too often get stuck with hosting the waste of others, which has a severe impact on their wellbeing. That’s just not okay, so let’s do our best to reduce what we dispose of.
          </p>

          <p>When our rubbish leaks into the ocean, that is also a downstream impact of our waste stream. Creating less cheap, disposable stuff means there will be much less opportunity for our rubbish to find its way into the
            environment.
          </p>

          <p>*Citation source: Institute for Local Self Reliance (ILSR) report, Wasting and Recycling in the United States 2000, page 31
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How many times can each container be reused and what happens to the containers when they have worn out?</Accordion.Header>
        <Accordion.Body>
          Each container can be reused 300+ times. When the containers can no longer be used they will be returned to the manufacturer (OZZI) in Oregon to be incorporated back into more containers and/or durable goods.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Are reusable containers safe to use during the COVID-19 pandemic?</Accordion.Header>
        <Accordion.Body>
          <p>All CDC and FDA guidance on safe food service operations supports the use of reusable containers.</p>

          <p>Our containers are washed and sanitized in accordance with strict Department of Health guidelines. These standards are rigorous and designed to keep users safe from infectious disease.</p>

          <p>Reusable containers have been shown to be safer for food service than disposable food ware for this reason. To date, there are no known cases of COVID-19 that have spread through sanitized reusable food ware.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What additional steps has Full Cycle Takeout taken to ensure sanitation?</Accordion.Header>
        <Accordion.Body>
          <p>At every step of our operations, we utilize CDC recommended products and guidelines for sanitation.</p>

          <p>Our containers will always be washed at Department of Health certified facilities utilizing commercial-grade dish-washing equipment, then securely stored until we distribute them to the restaurants, preventing any
            contamination.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Is eating from reusable takeout containers as safe as eating from dine-in reusables?</Accordion.Header>
        <Accordion.Body>
          If you’re comfortable using dishes when you dine-in at restaurants, you can rest assured we use the same washing practices for our takeout wares! Reusable containers are safe and better for the environment!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What material are Full Cylce Takeout containers made of?</Accordion.Header>
        <Accordion.Body>
          The containers we use for the program pilot are made by a company called OZZI. They are BPA and BPS-free, and made with #5 Polypropylene plastic, which is one of the safest plastics with excellent heat and acidity-resistance qualities.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Why was polypropylene chosen for the pilot program containers? Aren&apos;t we trying to go plastic-free?</Accordion.Header>
        <Accordion.Body>
          <p>Currently there are limited materials that can be used to produce containers ethically and with minimal environmental impacts. Every material type (reusable plastic, stainless steel, glass, etc.) has social and environmental
            impacts to consider. Whether it’s mining for metals or extracting fossil fuel—making reusable containers has an impact on the planet. While we test our our system, we are researching what container material will have the least
            impact and the most benefit.
          </p>

          <p>The good news—reusables have waaaayyyy less of an impact than single-use materials. So by reusing a container, you are doing a great thing!</p>

          <p>For our pilot program, we have chosen to use #5 polypropylene containers, made with 20-30% recycled material from OZZI. These containers are BPA and BPS-free, and certified food safe.</p>

          <p>In the future, Full Cycle Takeout would like to offer plastic-free reusable options for this program. We are eagerly exploring the other feasible alternatives.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Do reusable takeout containers help prevent greenhouse gas emissions?</Accordion.Header>
        <Accordion.Body>
          <p>Heck yes they do! According to the Clean Water Action Network, “reusable food service containers have lower overall greenhouse emissions or energy usage than comparable single-use products.” *</p>

          <p>Across the “upstream” and “downstream” waypoints of our waste stream, enormous quantities of Greenhouse Gas (GHG) emissions are generated during extraction, processing, transportation, and disposal. These emissions directly
            contribute to the climate crisis we are facing, with nearly 40% of GHG emissions coming from the way we make, take, ship and dispose of goods! **
          </p>

          <p>By reusing containers hundreds of times we can avoid the GHG emissions generated from constantly manufacturing, shipping, and tossing single-use items.
          </p>

          <p>*Citation: Clean Water Action Network report: Greenhouse Gas Impacts of Disposable vs Reusable Foodservice Products, January 2017
          </p>
          <p>**Citation : EPA.gov, Global Greenhouse Gas Emissions Data page</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>What happens to Full Cycle Takeout containers at the end of their life cycle?</Accordion.Header>
        <Accordion.Body>
          <p>At the end of life, our containers will be sent back to OZZI in Oregon. They recycle retired containers back into new containers or other reusable products. OZZI is committed to taking responsibility for the end-of-life of
            their products (which is awesome!).
          </p>

          <p>The guaranteed recycling and transparency of the end-of-life management was very important for us when selecting our containers.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>Can my Full Cylce Takeout container go in the microwave?</Accordion.Header>
        <Accordion.Body>
          <p>Short answer, YES.</p>

          <p>OZZI has certified their container as BPA and BPS-free, freezer safe, dishwasher safe, and microwave safe for reheating (won’t leach toxins into food). These containers are NSF certified, UL certified, FDA approved, and made in
            the USA.
          </p>
          <p>That said, we still recommend heating our food on the stove, or transferring to a plate for microwaving.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);
export default FAQ;
