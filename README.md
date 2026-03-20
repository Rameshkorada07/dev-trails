# GigGuard  
AI-powered weekly income protection for delivery partners  

GigGuard is a web-based, AI-powered income protection platform built for food delivery workers whose earnings depend on being active every single day.

When something outside their control happens — such as heavy rain, flooding, extreme heat, poor air quality, traffic disruption, local restrictions, or platform outages — their working hours drop, and so does their income.

That is the gap GigGuard is designed to solve.

---

## Problem Statement
---

Delivery partners are often ready to work, but real-world disruptions can stop them from completing orders.

These disruptions may include:

- heavy rain  
- waterlogging and floods  
- extreme heat  
- poor air quality  
- road blockage or traffic slowdown  
- local shutdowns or curfews  
- dispatch or platform downtime  

In such situations, workers lose income even though the issue is not their fault.

Most existing protection systems focus on:

- accidents  
- health emergencies  
- vehicle damage  
- life insurance  

But they do not directly solve short-term income loss caused by external disruptions.

---

## Core Question
---

What happens when a gig worker loses income because outside conditions make work temporarily impossible?

GigGuard answers that question.

---

## Our Solution
---

GigGuard provides a weekly income protection plan for delivery workers through a mobile-optimized web platform.

The platform understands:

- where the worker usually operates  
- when they normally work  
- how much they typically earn  
- how risky their delivery zone is  
- how often disruption events happen in that area  

Using this information, the system recommends a personalized weekly protection plan.

Then, the platform continuously tracks disruption signals such as:

- weather alerts  
- flood or waterlogging conditions  
- heat intensity  
- AQI levels  
- traffic slowdown  
- local closure alerts  
- platform or dispatch outages  

If a verified disruption affects a worker during their normal earning hours, GigGuard:

- detects the disruption  
- checks whether the worker is genuinely affected  
- validates the claim using fraud checks  
- estimates income loss  
- initiates the claim automatically  
- simulates an instant payout  

This creates a faster, smarter, and fairer support system for gig workers.

---

## Why This Matters
---

Gig workers do not think in terms of annual insurance policies.

They think in terms of:

- today’s shift  
- this week’s fuel  
- this week’s food  
- this week’s savings  
- this week’s household expenses  

Even losing a few working hours can affect their financial stability.

That is why GigGuard is designed to be:

- weekly, not yearly  
- web-based and mobile-optimized, accessible without installation  
- hyperlocal, because risk changes from one area to another  
- automatic, because workers should not struggle with paperwork  
- fair, because claims are validated before payout  
- fast, because delayed support is often ineffective  

---

## Target Users
---

GigGuard is designed for food delivery partners working in ecosystems similar to:

- Zomato  
- Swiggy  
- other hyperlocal delivery platforms  

We focus on this group because:

- their work depends on continuous delivery cycles  
- their earnings are highly sensitive to local disruptions  
- they operate within clearly defined zones  
- their lost income can be estimated in a practical and understandable way  

This makes the problem highly visible and the solution highly relevant.

---

## How GigGuard Works
---

### 1. Worker Registration and Onboarding  

The worker registers on the web platform and provides basic details such as:

- work zone  
- average working hours  
- average weekly earnings  
- payout preference  

---

### 2. AI-Based Risk Assessment  

The platform studies worker risk using:

- location  
- weather history  
- flood exposure  
- heat exposure  
- AQI trends  
- traffic patterns  
- shift timing  
- past disruption frequency  

Based on these inputs, the system generates a risk score.

---

### 3. Weekly Premium Recommendation  

Using the risk score, the platform recommends a suitable weekly plan.

For example:

- lower-risk worker → lower premium  
- higher-risk zone → slightly higher premium  
- full-time worker with higher exposure → broader protection plan  

This makes pricing personalized instead of one-size-fits-all.

---

### 4. Real-Time Trigger Monitoring  

The system continuously monitors disruption events using APIs or mock feeds.

Example triggers include:

- heavy rain  
- flood alerts  
- waterlogging  
- extreme heat  
- severe pollution  
- road slowdown  
- local shutdown or curfew  
- platform outage  

---

### 5. Automatic Claim Initiation  

When a verified disruption occurs, the system checks which workers are likely affected during that time window.

If the worker falls under the covered zone and timing, the claim is created automatically.

---

### 6. Fraud Detection Layer  

Before any payout is simulated, the claim goes through validation checks such as:

- location matching  
- activity timing validation  
- duplicate claim prevention  
- anomaly detection  
- suspicious behavior scoring  

This makes the system fast without making it weak.

---

### 7. Income Loss Calculation  

The platform estimates lost income using a simple approach:

Average hourly earnings × lost hours × severity factor  

This gives a practical estimate of earnings affected by disruption.

---

### 8. Instant Simulated Payout  

Once the claim is approved, the system simulates payout through a sandbox flow and reflects it instantly in the worker dashboard.

This improves trust, usability, and overall product experience.

---

## Core AI Components
---

GigGuard uses AI in key parts of the workflow:

1. Risk Scoring Engine  
   Predicts weekly risk based on worker profile and zone-level disruption exposure.  

2. Disruption Impact Engine  
   Checks whether a verified event overlaps with the worker’s actual earning window.  

3. Fraud Detection Engine  
   Flags suspicious or low-confidence claims before payout.  

4. Loss Estimation Engine  
   Calculates likely income reduction based on working pattern and disruption severity.  

---

## Main Features
---

### Worker Registration and Onboarding  
Simple web-based registration with minimal input requirements.

### Policy Dashboard  
Displays:

- active weekly plan  
- premium paid  
- coverage details  

### Coverage Status Visualization  
Shows:

- active coverage zones  
- real-time risk indicators  
- disruption alerts  

### Claim and Payout Notifications  
Provides instant updates when:

- a disruption is detected  
- a claim is initiated  
- a payout is processed  

### Admin Analytics Dashboard  
Enables monitoring of:

- active users and policies  
- zone-wise risk levels  
- claims and payouts  
- fraud indicators  
- disruption patterns  

---

## Example Scenario
---

Rahul is a food delivery partner.

He works in Zone A  
His normal shift is 6 PM to 10 PM  
He has purchased a weekly protection plan  
His average earnings are ₹100 per hour  

Now suppose:

heavy rain starts in Zone A at 7 PM  
deliveries are disrupted for 2 hours  

GigGuard does the following:

- detects the rain trigger  
- verifies that Rahul’s area is affected  
- checks that Rahul is usually active during that time  
- runs fraud and duplicate checks  
- estimates lost income  

Loss estimate:  
₹100 × 2 = ₹200  

The platform then simulates a payout and updates Rahul’s dashboard automatically.

---

## What Makes GigGuard Different
---

GigGuard is not just another insurance interface moved online.

Key differentiators:

- income-loss focused, not damage focused  
- weekly pricing, not annual commitment  
- delivery-worker-specific, not generic insurance  
- web-based PWA, no installation required  
- hyperlocal risk intelligence  
- automatic claim initiation  
- fraud-aware validation  
- instant payout simulation  

We are solving one specific problem:

helping delivery workers recover from income loss caused by short-term external disruptions.

---

## Technology Stack
---

### Frontend  
React  
Tailwind CSS  
Progressive Web App (PWA)  

### Backend  
Node.js  
Express.js  

### Database  
MongoDB  

### AI / ML  
Python microservices  
risk modeling  
fraud detection  

### Integrations  
weather APIs or mock feeds  
AQI / heat / flood signals  
traffic or local closure data  
platform outage simulation  
payment sandbox  

---

## System Flow
---


<pre>
   Worker Onboarding
          ↓
   Risk Assessment Engine
          ↓
   Weekly Premium Recommendation
          ↓
   Real-Time Trigger Monitoring
          ↓
   Impact Verification
          ↓
   Fraud Detection
          ↓
   Income Loss Estimation
          ↓
   Auto Claim Initiation
          ↓
   Instant Simulated Payout
          ↓
   Dashboard Update
</pre>
