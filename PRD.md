Product Requirements Document: Wikident
Version: 6.4 (AI-Enhanced MVP - Consolidated & Refined) Date: September 19, 2025 Author: Gemini AI (Updated based on Red Team analysis & strategic feedback)
1. Introduction & Vision 🎯
Wikident is a secure, cloud-native Single-Page Application (SPA) designed exclusively for the modern solo dental hygienist. Its mission is to eliminate administrative friction and empower hygienists to focus on what matters most: patient care.
The application solves the inefficiencies of outdated software by providing a visually stunning, intuitive, and lightning-fast interface for managing the practice. By being a web application, it ensures data is securely stored, backed up, and accessible from any modern browser.
The core design philosophy remains "Flow, not Friction." Every interaction is designed to be immediate, intuitive, and supportive of the hygienist's real-world workflow.

2. Product Goals & Success Metrics 📈
Business Goals
Increase Practice Efficiency: Reduce the time hygienists spend on non-clinical administrative tasks.
Enhance Patient Outcomes: Modernize the patient journey with proactive communication, education, and clear progress tracking.
Establish a Scalable Foundation: Build a secure and robust platform ready for future feature expansion and deeper integrations.
Create a Data-Driven Value Loop: Provide users with anonymized insights that help them improve their practice.
User Objectives
For the Dental Hygienist (Primary User):
Manage appointments (book, reschedule, cancel) with minimal clicks.
Access a complete and secure patient history instantly, including visual progress over time.
Communicate with and educate patients and collaborators efficiently.
Perform clinical charting with maximum speed and minimal friction, using hands-free technology.
For the Patient:
Autonomously schedule their own appointments and update their personal information.
Receive timely, relevant communication and educational content about their care.
For the Collaborating Dentist:
Securely share patient files without needing to create an account.
Success Metrics (KPIs)
Efficiency KPI: Reduce the average time to book a new patient appointment by 40% compared to a manual process of a phone call and paper calendar entry.
Adoption KPI: Achieve a 70% adoption rate of the "Patient Self-Booking" feature among a hygienist's patient base within 6 months of onboarding.
Engagement KPI (North Star): Target "Weekly Active Sessions," aiming for users to log in at least 4 days per week.
NEW - Education KPI: Achieve a 50% average view rate on shared educational videos within 72 hours of being sent.
NEW - Clinical Outcomes KPI: Increase the recall booking conversion rate by 15% for patients targeted by the Predictive Recall system versus those on a standard 6-month reminder.
NEW - Retention KPI: Increase 3-month user retention by 10% for users who actively engage with the Practice Benchmarking feature.

3. User Personas & Key Flows
(User Personas remain the same: 👩‍⚕️ Dana, 🧑 Pavel, 👨‍⚕️ Dr. Novák)
Key User Flows
First-Time Setup: A guided wizard to get the practice operational in minutes.
Quick Appointment Booking: Seamless booking from the calendar or patient card.
Patient Self-Service: Hygienist sends a link; patient books from available slots.
Daily Workflow: Dana starts on the Dashboard, checks tasks, and manages her day from the calendar.
Secure Dentist Collaboration: Dana shares a secure, OTP-verified link for Dr. Novák to view/upload files.
NEW - AI-Assisted Charting: Dana activates voice mode during an exam. She calls out periodontal readings ("buccal, three-two-three..."), and the system populates the chart in real-time. She verbally confirms the entries before saving.

4. Feature Requirements & Specifications
4.1. First-Time Setup Wizard
Upon first login, the user is guided through a mandatory, multi-step setup process to configure their practice.
Step 1: Welcome: Brief introduction to the app's value proposition.
Step 2: Practice Details: Input practice name, address, contact info, and upload a logo (for branding emails).
Step 3: Working Hours: A visual scheduler to set standard weekly working hours and block out lunch breaks.
Step 4: Appointment Types: Pre-configured with common types (Entry, Recall), with the ability to immediately add custom types, durations, prices, and assign a color code to each.
Step 5: Data Import: Provide an option to upload a CSV file of existing patients. The UI will map columns and validate data. The system will process all valid rows from the CSV and then provide the user with a downloadable error report detailing any rows that failed to import and the specific reason for failure (e.g., "Row 15: Invalid email format").
Step 6: Done! A confirmation screen that directs the user to their newly set up Dashboard.
4.2. Global System Features
UI/UX: A dark-themed glassmorphic design. All UI elements must meet WCAG 2.1 Level AA contrast ratio standards.
Anonymous Mode: Toggled by the A key. When active, all patient-identifying information is obfuscated, showing only the patient's initials. Photos, contact information (phone, email), and private notes will be hidden. This mode remains active as the user navigates between different modules and must be toggled off with the A key to be disabled.
Keyboard Shortcuts: A comprehensive and customizable set of shortcuts for power users to navigate and perform common actions (e.g., new appointment, search patient) without using the mouse.
Templating Engine: To maximize efficiency, the system will feature a robust templating engine. Users can create and customize templates for common communications (custom messages, recall notes), patient notes, and task descriptions.
4.3. Core Application Views & Workflow
The application is built around a two-view workflow designed for maximum efficiency. The user starts with a high-level calendar overview and can drill down into a comprehensive four-column detail view for a specific appointment.
4.3.1. Dashboard
Overview: The dashboard serves as the primary navigation hub and provides a quick overview of key functionalities. It features a clean, dark-themed interface with prominently displayed functional tiles.
Key Components and Placement:
Header (Top Left): Wikident Logo/Brand with the subtitle "Rychlý přehled ordinace" (Quick overview of the practice).
Dashboard Title (Top Center): "DASHBOARD" label.
Navigation Tiles (Main Content Area): Five distinct, equally sized tiles arranged horizontally for main navigation. Each tile contains a relevant icon, a primary label (e.g., "Kalendář"), and a secondary descriptive label (e.g., "Naplánujte návštěvy").
Specific Tiles: Kalendář (Calendar), Pacienti (Patients), Videa (Videos), Finance (Finance), Nastavení (Settings).
4.3.2. Calendar Module
Overview: The central hub for all appointment management, providing Day, Week, and Month views in a clean, dark-themed interface.
Key Components and Placement:
Main Navigation Panel (Left Sidebar): Contains a "Back to Dashboard" link, an interactive mini-calendar, and a To-Do widget with a notification badge.
Main Header / Control Bar (Top): Houses date navigation arrows, a "Today" button, the current date display, a view switcher (Day, Week, Month), action icons (Search, Settings, Wizard, Private Mode), and a "+" button for new appointments.
Calendar View Area (Main Content): A dynamic grid (timeline for Day/Week, grid for Month) displaying colored appointment blocks. Content within each block is optimized for the current view (e.g., Day view shows more detail than Month view).
Interactivity: Clicking an appointment opens the Patient Card. Drag-and-drop rescheduling is enabled. Inline actions on appointments include delay messengers (5 min, 10 min) and selection checkboxes for bulk actions.
Bulk Action Bar (Bottom, Dynamic): Appears when appointments are selected, showing a selection counter and action buttons like "Postpone" and "Custom Message."
4.3.3. New Appointment Workflow
Overview: A streamlined, multi-step process within a single pop-up modal for fast and intuitive booking.
Step 1: Find or Add Patient View: An auto-focused search bar to find an existing patient or add a new one. Results update dynamically.
Step 2: Appointment Details View: After a patient is selected, this view allows configuration of Appointment Type, Duration, Price, and Remarks. It includes buttons for flexible booking ("ASAP", "5-8 months") and primary actions.
Step 3: Booking & Follow-up Actions:
Select Time Slot: Presents a list of available times based on the details from Step 2. Clicking a time and "Confirm Booking" finalizes the appointment.
Generate Patient Link: Creates a unique self-booking URL for the patient, with options to copy or send via WhatsApp, email, or SMS.
Send Questionnaire: Generates a link for the patient to complete their medical intake form.
4.3.4. Patient Card
Overview: The central source of truth for all patient information, appearing when an appointment is selected. It's a comprehensive, multi-column dashboard providing a 360-degree view of the patient.
Key Components and Placement:
Patient Progress Timeline (Top of Main Content): A horizontal visual timeline of the patient's history, showing all appointments as clickable event markers (Completed, Planned, Missed) with the primary clinical index displayed below each. Clicking an event loads its details into the workspace.
Column 1: Today's Schedule (Far Left): A fixed vertical column showing the clinic's schedule for the day, providing constant situational awareness.
Column 2: Comprehensive Patient Profile (Center-Left): The master panel for patient data, including:
Header: Patient Photo, Full Name, Age, Date of Last Appointment, Total Visits.
Status Indicators: Prominent Medical Condition Tags (e.g., #Allergy: Penicillin), GDPR Consent status (Green/Red icon), Profile Completeness notice, and Online Patient Intake Form status ("Completed" or "Pending").
Details: Contact Info, Collaborating Dentist, Birth ID, linkable Family Members, and Medical History (Anamnesis, Allergies).
Column 3: Patient's Appointment History (Center-Right): A detailed, filterable list of all Upcoming, Actual, and Past appointments.
Column 4: Current Appointment Workspace (Far Right): The primary interactive area for managing the selected appointment, including a countdown timer, price field, notes module, payment tracker, and action buttons.
Online Patient Intake Form Feature:
Workflow: The hygienist can send a secure, mobile-friendly link to patients to fill out contact and medical details before their visit.
Automation: Upon submission, the patient's profile is automatically created or updated, and the status indicator on their Patient Card is set to "Completed."

4.3.5. Settings Module
Overview: The central command center for configuring the workspace, accessed via the settings icon. It uses a tabbed interface for logical organization.

Key Components:
Appointment Types Tab: Create, edit, reorder, and delete appointment types. Define Name, Duration, Price, Color, Max/Day booking limits, Buffer Time, and upload Log Templates.
Reminders Tab: Create and manage automated appointment reminders sent to patients.
Data Management Tab: Tools to Import (Patients, Billing) and Export (Patients, Billing, Appointments) practice data.
Global Settings Tab: Control application-wide rules in collapsible sections:
Default Settings: Set default buffer times and appointment durations.
Working Hours & Lunch Breaks: A visual editor for the weekly schedule that controls calendar availability.
Backup Slots for Urgent Cases: A toggle to enable and configure reserved time slots for urgent cases.
Priority Configuration: Define and rank Patient Priority Groups and Appointment Priority Groups. Set the formula P = [X] x Patient Priority + [Y] x Appointment Priority with linked inputs for X and Y (where X + Y = 1) for an advanced patient prioritization system.

4.4. Communication & Notifications
Multi-Channel Reminders: Robust SMS and Email integrations. All sending costs (within a fair-use policy) are included in the subscription fee. WhatsApp integration is a future consideration.
4.4.1. Integrated Patient Education Hub
Content: A curated library of high-quality, short videos explaining common conditions and procedures.
Patient Tagging: Hygienists can apply tags to patients (e.g., #perio-maintenance).
Sharing & Automation: Manually send videos or create rules to automatically send content based on triggers.
Tracking: The hygienist can see the status of shared content ("Sent," "Viewed").
4.5. AI & Automation Engine
4.5.1. AI-Powered Voice Charting
4.5.2. Predictive Recall System
4.6. Analytics & Benchmarking
4.6.1. Anonymized Practice Benchmarking
4.7. Secure Dentist Collaboration
A secure workflow for sharing patient records with external dentists and specialists.
Secure Link Sharing: Secured with a time-boxed link and a mandatory One-Time Passcode (OTP) sent to the collaborator's email.
Permission Scoping: The collaborator's view explicitly omits all private hygienist notes and all financial data.
Multi-Collaborator Management: The hygienist can view and manage all active share links for a single patient from the patient's card, with the ability to revoke access individually.
Review & Approval: Files uploaded by a collaborator are placed in a holding area, requiring hygienist review before being added to the patient's permanent record.
4.8. Out of Scope for MVP
To ensure a timely and stable release, the following features are explicitly designated for a Future Release:
Customizable Layout: The ability for users to drag-and-drop widgets and customize the layout of the main dashboard and patient card views.

5. Technical Architecture & Stack
System Architecture: Cloud-native (AWS, GCP, Supabase) client-server architecture.
Frontend: Reactive framework (Svelte, Vue.js).
Backend: The business logic, API, and database management will be handled by a customized Odoo instance.
Database: Relational (PostgreSQL, as managed by Odoo).
5.1. Data Models
Patient: id, practiceId, name, contactInfo, birthdate, medicalHistory, etc.
Appointment: id, patientId, hygienistId, date, type, status, duration, price, notes, etc.
CollaboratorAccess: id, patientId, collaboratorEmail, token, expiresAt, permissions, auditLog {issuedAt, lastAccessedAt, accessorIp}.
5.2. Key Service Dependencies
Communications: Twilio (SMS), SendGrid (Email), or similar (managed by the platform).
AI: High-quality Speech-to-Text API (e.g., Google Speech-to-Text, AssemblyAI).
Video: Secure video hosting and streaming service (e.g., Mux, Vimeo).
Analytics: A data pipeline for collecting, anonymizing, and aggregating benchmark data.

6. Phased Development Roadmap
Phase 1 (MVP): Core Cloud Application
Features: First-Time Setup Wizard (with robust CSV import), all booking workflows, Calendar Module, Dashboard View, Patient Card (with Comprehensive Profile and Progress Timeline), and secure dentist collaboration.
Phase 2: Communication & Automation
Features: Full SMS/Email integration, Online Patient Intake Form, Integrated Patient Education Hub, and the Predictive Recall System.
Phase 3: Financials & Analytics
Features: Invoicing/payment module (with Stripe), basic practice analytics dashboard, and Anonymized Practice Benchmarking.
Phase 4: Advanced Tooling & Integrations
Features: AI-Powered Voice Charting, support for multiple practitioners, and development of a third-party API for PMS integrations.

7. Risks and Mitigations
Technical Risk: Cloud service downtime.
Mitigation: Reputable provider, strong SLA, robust disaster recovery plan.
User Adoption Risk: Difficulty migrating from existing systems.
Mitigation: Seamless and error-tolerant CSV import, excellent onboarding support.
Compliance Risk: Failing to meet HIPAA/GDPR requirements.
Mitigation: Engage a compliance expert early, build auditing into the core architecture.
AI Accuracy Risk: Voice charting incorrectly transcribes clinical data.
Mitigation: Select a best-in-class API, perform extensive real-world testing, and build an easy-to-use correction mechanism for the user.
Data Privacy Risk (Benchmarking): Users perceive the feature as a privacy risk.
Mitigation: Make the feature strictly opt-in with a clear, non-legalese explanation of the anonymization process.
Content Licensing Risk: The educational videos must be sourced and licensed properly.
Mitigation: Finalize the content strategy early: either produce videos in-house or partner with a reputable dental content provider.
Open Question for the Team (Risk): The definition of what must be logged for HIPAA is still high-level. We need to create a definitive list of all PHI access events (view, create, update, delete, export, share) that must be captured in an immutable audit log.

