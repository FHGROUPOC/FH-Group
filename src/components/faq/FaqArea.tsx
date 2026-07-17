"use client";
import React, { useState } from "react";

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting mb-5">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="cs_accordeon anim_div_ShowDowns faq-new-quest">
          <div
            onClick={() => toggleAccordion(0)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 0 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Policy on Prevention of Child Labor and Forced Labor
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 0 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 0 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">1. Commitment Statement</h6>
              <p className="answer-para">
                FH Enterprises Private Limited strictly prohibits child labor
                and forced labor in all aspects of its business operations. We
                are committed to ethical employment practices, ensuring
                compliance with Pakistan's labor laws, International Labour
                Organization (ILO) conventions, and the United Nations
                Sustainable Development Goals (SDG 8 - Decent Work and Economic
                Growth).
              </p>
              <h6>2. Legal Compliance & Standards</h6>
              <h5 className="answer-para">Our company follows :</h5>
              <ul>
                <li>
                  <span> Pakistan Employment of Children Act, 1991 - </span>
                  Prohibiting employment of children under 14 years
                </li>
                <li>
                  <span>
                    Pakistan Prevention of Trafficking in Persons Act, 2018 -
                  </span>
                  Preventing forced labor and exploitation
                </li>
                <li>
                  <span>
                    Punjab Prohibition of Child Labor at Brick Kilns Act, 2016 -
                  </span>
                  Preventing child labor in hazardous sectors
                </li>
                <li>
                  <span> ILO Conventions 138 & 182 - </span>
                  Minimum Age for Employment & Elimination of Worst Forms of
                  Child Labor
                </li>
              </ul>
              <h6>3. Policy Guidelines</h6>
              <ul>
                <li>
                  No child under 18 years shall be employed in any capacity
                </li>
                <li>
                  All employees must provide verified national identity
                  documents (CNICs) before hiring
                </li>

                <li>
                  No forced labor, bonded labor, or coercion in employment
                  practices
                </li>
                <li>
                  No third-party suppliers or contractors engaging in child or
                  forced labor will be contracted
                </li>
                <li>
                  Employees must work voluntarily with fair wages, as per
                  Pakistan Minimum Wages Act
                </li>
              </ul>
              <h6>4. Implementation & Compliance</h6>
              <ul>
                <li>
                  Regular check and balance to ensure no child or forced labor
                  in our operations
                </li>
                <li>
                  Strict supplier screening to ensure ethical labor practices in
                  all collaborations
                </li>
                <li>
                  Employee awareness programs on labor rights and ethical
                  employment
                </li>
                <li>
                  Reporting mechanisms where employees can anonymously report
                  labor rights violations
                </li>
              </ul>
              <p>
                FH Enterprises Private Limited is committed to providing a safe,
                fair, and ethical work environment while ensuring all business
                operations align with human rights principles and labor laws.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(1)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 0 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Employee Health and Well-being Policy
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 1 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 1 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">1. Commitment Statement</h6>
              <p className="answer-para">
                FH Enterprises Private Limited is committed to promoting the
                health, safety, and well- being of its employees. We recognize
                that a healthy workforce leads to increased productivity, job
                satisfaction, and overall company success. Our approach aligns
                with Pakistan’s labor laws and global well-being standards,
                including the United Nations Sustainable Development Goals (SDG
                3 – Good Health & Well-being and SDG 8 – Decent Work & Economic
                Growth).
              </p>
              <h6>2. Key Policy Guidelines</h6>
              <h5 className="answer-para">
                A. Physical and Mental Health Support
              </h5>
              <ul>
                <li>
                  <span> Safe and Healthy Workplace - </span>
                  Ensuring a clean, safe, and ergonomic work environment
                </li>
                <li>
                  <span>Health Awareness Programs - </span>
                  Conducting sessions on stress management, nutrition, and
                  fitness
                </li>
                <li>
                  <span>Work-Life Balance - </span>
                  Flexible work arrangements, including remote work options when
                  feasible
                </li>
                <li>
                  <span> Paid Leave Policy - </span>
                  Including sick leave, maternity/paternity leave, and annual
                  leave
                </li>
              </ul>
              <h5 className="answer-para">B. Workplace Safety Measures</h5>
              <ul>
                <li>
                  <span> First Aid & Emergency Response - </span>
                  Availability of first aid kits and trained personnel
                </li>
                <li>
                  <span>Fire Safety Compliance - </span>
                  Fire extinguishers and emergency evacuation procedures in
                  place
                </li>
                <li>
                  <span>Compliance with Occupational Safety Laws - </span>
                  Adhering to local labor laws regarding workplace safety
                </li>
              </ul>
              <h5 className="answer-para">
                C. Employee Well-being & Mental Health
              </h5>
              <ul>
                <li>
                  <span>
                    Zero-Tolerance for Workplace Harassment & Discrimination -
                  </span>
                  Strict policies against harassment (as per Pakistan Protection
                  Against Harassment of Women at Workplace Act, 2010)
                </li>
                <li>
                  <span>Counseling and Support Services - </span>
                  Providing access to mental health resources
                </li>
                <li>
                  <span>Open Communication Culture - </span>
                  Encouraging employees to discuss work-related concerns freely
                </li>
              </ul>
              <h5 className="answer-para">
                D. Financial & Professional Well-being
              </h5>
              <ul>
                <li>
                  <span> Fair Compensation & Benefits - </span>
                  Ensuring salaries align with Pakistan’s Minimum Wages Act
                </li>
                <li>
                  <span>Skill Development & Training - </span>
                  Providing professional growth opportunities
                </li>
                <li>
                  <span>Equal Employment Opportunities - </span>
                  Hiring based on merit and performance
                </li>
              </ul>
              <h6 className="mt-3">3. Monitoring & Compliance</h6>
              <ul>
                <li>
                  <span> Regular check and balance</span>
                  to assess workplace health and safety conditions
                </li>
                <li>
                  <span>Anonymous feedback system</span>
                  for employees to report concerns regarding well-being
                </li>
                <li>
                  <span>Continuous policy improvements</span>
                  based on employee needs and legal requirements
                </li>
              </ul>
              <p>
                FH Enterprises Private Limited believes in fostering a healthy,
                safe, and inclusive work culture to enhance employee
                satisfaction and performance.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(2)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 2 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Employee Grievance & Dispute Resolution Policy
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 2 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 2 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">1. Commitment Statement</h6>
              <p className="answer-para">
                FH Enterprises Private Limited is committed to maintaining a
                fair, transparent, and respectful workplace. We recognize that
                employee grievances and disputes can arise, and we ensure a
                structured mechanism for fair resolution in compliance with
                Pakistan’s labor laws and international best practices.
              </p>
              <h6>2. Objectives</h6>
              <ul>
                <li>
                  Provide a <span>confidential and structured</span> process for
                  addressing grievances
                </li>
                <li>
                  Promote <span>fairness and impartiality</span> in handling
                  disputes
                </li>
                <li>
                  Ensure <span>quick and effective</span> resolution to maintain
                  a positive work environment
                </li>
                <li>
                  Prevent
                  <span>
                    workplace harassment, discrimination, and unfair treatment
                  </span>
                </li>
              </ul>
              <h6>3. Scope</h6>
              <h5 className="answer-para">
                This policy applies to all employees and covers grievances
                related to :
              </h5>
              <ul>
                <li>Workplace conflicts or disputes</li>
                <li>Discrimination, harassment, or unfair treatment</li>
                <li>Salary, benefits, and working conditions</li>
                <li>Performance evaluations and promotions</li>
                <li> Health and safety concerns</li>
              </ul>
              <h6>4. Grievance Resolution Process</h6>
              <h5 className="answer-para">A. Informal Resolution (Step 1)</h5>
              <p>
                Employees are encouraged to resolve minor disputes directly with
                the concerned person or department through open communication.
              </p>
              <h5 className="answer-para">B. Formal Complaint (Step 2)</h5>
              <p>
                If unresolved, employees may submit a formal grievance in
                writing to the HR Department or their immediate supervisor.
              </p>
              <h5 className="answer-para">
                C. Investigation & Mediation (Step 3)
              </h5>
              <p>
                HR will review the complaint within 7 working days and may
                conduct an investigation if required.
              </p>
              <p>
                Mediation may be offered as an option for dispute resolution.
              </p>
              <h5 className="answer-para">D. Decision & Resolution (Step 4)</h5>
              <p>
                A formal decision will be provided within 14 working days,
                ensuring fairness and compliance with company policies.
              </p>
              <p>
                If the issue remains unresolved, the matter may be escalated to
                senior management.
              </p>
              <h5 className="answer-para">
                E. Escalation & External Resolution (Step 5)
              </h5>
              <p>
                If employees are dissatisfied with the outcome, they may
                escalate concerns to external labor authorities, following
                Pakistan’s labor dispute resolution mechanisms.
              </p>
              <h6>5. Employee Protection & Confidentiality</h6>
              <ul>
                <li>
                  <span>No retaliation - </span> Employees will not face any
                  retaliation for filing a complaint in good faith
                </li>
                <li>
                  <span>Strict confidentiality - </span> Grievances will be
                  handled discreetly and professionally
                </li>
                <li>
                  <span>Neutral investigation - </span> All cases will be
                  reviewed fairly and without bias
                </li>
              </ul>
              <h6>6. Monitoring & Compliance</h6>
              <ul>
                <li>
                  <span>Regular check and balance</span> to assess grievance
                  trends and improve policies
                </li>
                <li>
                  <span>Annual review of the grievance policy </span> to align
                  with legal and workplace changes
                </li>
                <li>
                  <span>Encourage feedback </span> from employees to enhance
                  dispute resolution mechanisms
                </li>
              </ul>
              <p>
                FH Enterprises Private Limited believes in open communication,
                fairness, and employee rights, ensuring a workplace where every
                concern is addressed professionally.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(4)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 4 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Diversity, Equity, and Inclusion (DE&I) Policy
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 4 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 4 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">Commitment Statement</h6>
              <p className="answer-para">
                FH Enterprises Private Limited is committed to fostering a
                diverse, equitable, and inclusive workplace where all employees
                feel valued, respected, and empowered. We recognize that a
                diverse workforce drives innovation, enhances productivity, and
                strengthens our organizational culture. Our DE&I policy aligns
                with Pakistan’s labor laws, International Labour Organization
                (ILO) standards, and the United Nations Sustainable Development
                Goals (SDG 5 – Gender Equality and SDG 10 – Reduced
                Inequalities).
              </p>
              <h6 className="mt-3">Core Principles</h6>
              <ul>
                <li>
                  <span>Diversity - </span> We welcome individuals of all
                  backgrounds, cultures, genders, abilities, and experiences.
                </li>
                <li>
                  <span>Equity - </span> We ensure fair access to opportunities,
                  benefits, and career growth for all employees.
                </li>
                <li>
                  <span>Inclusion - </span> We promote a workplace where every
                  employee feels heard, valued, and supported.
                </li>
              </ul>
              <h6 className="mt-3">Policy Guidelines</h6>
              <h5 className="answer-para">A. Equal Employment Opportunities</h5>
              <ul>
                <li>
                  <span>Merit-Based Hiring - </span>Recruitment and promotions
                  are based on skills, qualifications, and experience.
                </li>
                <li>
                  <span>Zero Discrimination - </span> No bias based on gender,
                  age, disability, religion, ethnicity, or socioeconomic status.
                </li>
                <li>
                  <span>Inclusive Hiring Practices - </span>Encouraging
                  applications from women, persons with disabilities, and
                  minority groups
                </li>
              </ul>
              <h5 className="answer-para">B. Workplace Culture & Inclusion</h5>
              <ul>
                <li>
                  <span> Safe & Respectful Workplace - Zero tolerance</span>
                  for harassment, discrimination, or bullying.
                </li>
                <li>
                  <span>Flexible Work Arrangements - </span> Providing work-life
                  balance through remote work and family-friendly policies.
                </li>
                <li>
                  <span>Religious & Cultural Sensitivity - </span>Accommodating
                  diverse cultural and religious practices.
                </li>
              </ul>
              <h5 className="answer-para">C. Pay Equity & Career Growth</h5>
              <ul>
                <li>
                  <span> Equal Pay for Equal Work - </span>
                  Ensuring salaries are based on skills and responsibilities,
                  not gender or bias.
                </li>
                <li>
                  <span>Leadership Development - </span> Training and mentorship
                  programs to support women and underrepresented groups.
                </li>
                <li>
                  <span>Performance-Based Growth - </span>Transparent promotions
                  and career advancements.
                </li>
              </ul>
              <h5 className="answer-para">D. Accessibility & Accommodations</h5>
              <ul>
                <li>
                  <span> Inclusive Workspaces - </span>
                  Making reasonable accommodations for employees with
                  disabilities.
                </li>
                <li>
                  <span> Health & Well-being Support - </span> Providing mental
                  health resources and employee support programs.
                </li>
                <li>
                  <span>Maternity & Paternity Leave - </span>Encouraging
                  family-friendly policies for all employees.
                </li>
              </ul>
              <h6 className="mt-3">Implementation & Monitoring</h6>

              <ul>
                <li>
                  <span>Regular check and balance </span>
                  to assess workplace diversity and inclusion.
                </li>
                <li>
                  <span>Employee feedback mechanisms</span>to address concerns
                  related to discrimination or bias.
                </li>
                <li>
                  <span>Continuous policy updates</span>to align with
                  <span>
                    global best practices and local labor regulations.
                  </span>
                </li>
              </ul>
              <h6 className="mt-3">Reporting & Accountability</h6>

              <ul>
                <li>
                  Employees can report DE&I concerns
                  <span>confidentially </span> through HR .
                </li>
                <li>
                  All complaints will be
                  <span>
                    investigated fairly and resolved in a timely manner.
                  </span>
                </li>
                <li>
                  <span> Strict action</span>will be taken against any violation
                  of this policy.
                </li>
              </ul>
              <p>
                FH Enterprises Private Limited believes in building a diverse
                and inclusive workforce where everyone has an equal opportunity
                to succeed.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(5)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 5 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Corporate Social Responsibility (CSR) Policy
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 5 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 5 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">Commitment Statement</h6>
              <p className="answer-para">
                FH Enterprises Private Limited is dedicated to conducting
                business in a socially responsible, ethical, and sustainable
                manner. Our CSR policy aligns with the United Nations
                Sustainable Development Goals (SDGs) and focuses on economic,
                social, and environmental well-being while ensuring compliance
                with Pakistan’s corporate responsibility regulations.
              </p>
              <h6 className="mt-3">CSR Focus Areas</h6>
              <h5 className="answer-para">
                A. Ethical Business Practices & Governance
              </h5>
              <ul>
                <li>
                  <span>Transparency & Integrity - </span> Commitment to ethical
                  business conduct, anti- corruption, and fair trade practices.
                </li>
                <li>
                  <span>Compliance with Local & International Laws - </span>
                  Following
                  <span>
                    Pakistan’s corporate governance framework and global ethical
                    standards.
                  </span>
                </li>
              </ul>
              <h5 className="answer-para">
                B. Community Engagement & Social Welfare
              </h5>
              <ul>
                <li>
                  <span>Education & Skill Development - </span> Supporting youth
                  education programs, digital literacy, and vocational training.
                </li>
                <li>
                  <span>Women Empowerment - </span>
                  Promoting gender equality and providing employment
                </li>
                <li>
                  <span>Support for Underprivileged Communities - </span>
                  Contributing to{" "}
                  <span>
                    charitable causes, healthcare initiatives, and disaster
                    relief efforts.
                  </span>
                </li>
              </ul>
              <h5 className="answer-para">C. Environmental Sustainability</h5>
              <ul>
                <li>
                  <span>Sustainable Resource Use - </span>Reducing waste,
                  promoting digital solutions, and minimizing our carbon
                  footprint.
                </li>
                <li>
                  <span>Energy Efficiency - </span>
                  Encouraging eco-friendly work practices such as paperless
                  operations and energy conservation.
                </li>
                <li>
                  <span>Green Partnerships - </span>
                  Collaborating with organizations that prioritize
                  sustainability.
                </li>
              </ul>
              <h5 className="answer-para">
                D. Employee Well-being & Diversity
              </h5>
              <ul>
                <li>
                  <span>Fair Wages & Employee Rights - </span>Ensuring all
                  employees receive{" "}
                  <span>fair compensation and a safe work environment.</span>
                </li>
                <li>
                  <span>Diversity, Equity & Inclusion (DE&I) - </span>
                  Fostering a workplace that promotes{" "}
                  <span>equal opportunities for all.</span>
                </li>
              </ul>
              <h6 className="mt-3">Implementation & Monitoring</h6>
              <ul>
                <li>
                  <span>Regular check and balance </span>to measure CSR impact
                  and progress.
                </li>
                <li>
                  <span>Stakeholder Engagement - </span>Stakeholder Engagement{" "}
                  <span>NGOs, government bodies, and industry leaders.</span>
                </li>
                <li>
                  <span>Annual CSR Report - </span>Documenting our efforts and
                  contributions to corporate social responsibility.
                </li>
              </ul>
              <h6 className="mt-3">Reporting & Accountability</h6>
              <ul>
                <li>
                  <span>Regular check and balance </span>to measure CSR impact
                  and progress.
                </li>
                <li>
                  Employees, clients, and partners can{" "}
                  <span>suggest or report CSR initiatives</span>through a
                  dedicated communication channel.
                </li>
                <li>
                  The <span>CSR team</span> will oversee projects, ensuring
                  alignment with our corporate values and goals.
                </li>
              </ul>
              <p>
                FH Enterprises Private Limited believes that business success is
                not just about profits but also about positive contributions to
                society and the environment.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(6)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 6 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Health, Safety, Environmental, and Social (HSES) Policy
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 6 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 6 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">1. Purpose and Scope</h6>
              <p className="answer-para">
                The HSES Policy of FH Enterprises Private Limited ("FH
                Enterprises") defines our commitment to maintaining the highest
                standards of health, safety, environmental sustainability, and
                social responsibility. This policy applies to all employees,
                clients, vendors, and stakeholders associated with FH
                Enterprises.
              </p>
              <h6 className="mt-3">2. Policy Statement</h6>
              <p>FH Enterprises is committed to:</p>
              <ul>
                <li>
                  <span>Health & Safety : </span> Ensuring a safe and healthy
                  work environment for all employees and clients.
                </li>
                <li>
                  <span>Environmental Protection : </span> Reducing
                  environmental impact and promoting sustainability.
                </li>
                <li>
                  <span>Social Responsibility : </span> Upholding ethical
                  business practices and fostering community well-being.
                </li>
                <li>
                  <span>Compliance & Governance : </span> Adhering to all
                  applicable laws, regulations, and industry best practices.
                </li>
              </ul>
              <h6 className="mt-3">3. Compliance with Laws & Regulations</h6>
              <p className="answer-para">
                FH Enterprises will comply with all relevant national and
                international laws related to health, safety, environmental
                sustainability, and social responsibility. Employees must adhere
                to regulatory guidelines and internal policies to maintain
                ethical and lawful operations.
              </p>
              <h6 className="mt-3">4. Health and Safety Policy</h6>
              <p className="answer-para">
                FH Enterprises prioritizes workplace safety by:
              </p>
              <ul>
                <li>
                  Implementing preventive measures to minimize risks and
                  hazards.
                </li>
                <li>
                  Providing employees with safety training and necessary
                  protective equipment.
                </li>
                <li>
                  Ensuring emergency response plans are in place and regularly
                  updated.
                </li>
                <li>
                  Reporting and addressing all incidents and near misses
                  promptly.
                </li>
              </ul>
              <h6 className="mt-3">5. Environmental Policy</h6>
              <p className="answer-para">
                FH Enterprises is committed to sustainability by:
              </p>
              <ul>
                <li>Reducing energy consumption and waste production.</li>
                <li>
                  Promoting the use of eco-friendly materials and resources.
                </li>
                <li>Encouraging sustainable practices in daily operations.</li>
                <li>
                  Complying with environmental regulations and industry
                  standards.
                </li>
              </ul>
              <h6 className="mt-3">6. Social Responsibility Policy</h6>
              <p className="answer-para">
                FH Enterprises fosters a responsible and inclusive workplace by:
              </p>
              <ul>
                <li>
                  Promoting diversity, equality, and a discrimination-free work
                  environment.
                </li>
                <li>Ensuring fair labor practices and employee well-being.</li>
                <li>Engaging in community development initiatives.</li>
                <li>Supporting gender equality and workplace safety.</li>
              </ul>
              <h6 className="mt-3">7. Security Policy</h6>
              <p className="answer-para">
                To ensure the security of employees, clients, and company
                assets, FH Enterprises will:
              </p>
              <ul>
                <li>
                  Implement robust security measures to prevent unauthorized
                  access.
                </li>
                <li>Maintain secure data management practices.</li>
                <li>Provide employees with training on security protocols.</li>
                <li>
                  Establish grievance mechanisms for reporting security
                  concerns.
                </li>
              </ul>
              <h6 className="mt-3">8. Policy Governance & Review </h6>
              <ul>
                <li>
                  The Board of Directors will oversee the implementation and
                  review of this policy.
                </li>
                <li>
                  Regular audits and assessments will be conducted to ensure
                  compliance and continuous improvement.
                </li>
                <li>
                  The policy will be reviewed and updated at least every two
                  years or as required by regulatory changes.
                </li>
              </ul>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(7)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 7 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Environmental Management System
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 7 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 7 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">1. Introduction</h6>
              <p className="answer-para">
                As a technology-driven company, FH Enterprises Private Limited
                is committed to minimizing its environmental impact by adopting
                sustainable IT practices, reducing energy consumption, and
                promoting digital solutions that contribute to a greener
                environment. Our EMS aligns with Pakistan’s Environmental
                Protection Act (PEPA) 1997 and Punjab Environmental Quality
                Standards (PEQS) while integrating best practices for
                eco-friendly IT operations.
              </p>
              <h6 className="mt-3">2. Environmental Policy</h6>
              <p>We strive to:</p>
              <ul>
                <li>
                  Reduce
                  <span>carbon footprint</span>
                  by promoting remote work and digital services
                </li>
                <li>
                  Optimize
                  <span>energy consumption</span>
                  by using energy-efficient servers and office equipment
                </li>
                <li>
                  Minimize
                  <span>electronic waste (e-waste)</span>
                  by responsibly managing hardware disposal
                </li>
                <li>
                  Ensure
                  <span>
                    sustainable data storage and cloud computing practices
                  </span>
                </li>
                <li>
                  Promote
                  <span>paperless operations</span>
                  and digital documentation
                </li>
              </ul>
              <h6 className="mt-3">
                3. Key Environmental Strategies for a Digital Company
              </h6>
              <h5 className="answer-para">
                A. Energy-Efficient IT Infrastructure
              </h5>
              <ul>
                <li>
                  Use
                  <span>energy-saving devices and servers</span>
                  to reduce electricity consumption
                </li>
                <li>
                  Optimize
                  <span>cloud computing </span>
                  to minimize the need for physical servers
                </li>
                <li>
                  Encourage
                  <span>power management settings</span>
                  on all office computers
                </li>
              </ul>
              <h5 className="answer-para">
                B. Sustainable Office & Remote Work Practices
              </h5>
              <ul>
                <li>
                  Implement a<span>hybrid/remote work policy </span>
                  to reduce commuting and emissions
                </li>
                <li>
                  Encourage
                  <span>video conferencing </span>
                  over unnecessary business travel
                </li>
                <li>
                  Use
                  <span>eco-friendly workspaces</span>
                  with natural lighting and ventilation
                </li>
              </ul>
              <h5 className="answer-para">
                C. Digital Sustainability & E-Waste Management
              </h5>
              <ul>
                <li>
                  Encourage <span>hardware reuse and recycling </span>
                  with certified e-waste recyclers
                </li>
                <li>
                  Partner with
                  <span>Lahore Waste Management Company (LWMC) </span>
                  for electronic waste disposal
                </li>
                <li>
                  Upgrade
                  <span>software solutions</span>
                  to extend hardware lifespan and reduce e-waste
                </li>
              </ul>
              <h5 className="answer-para">
                D. Green Social Media & Digital Services
              </h5>
              <ul>
                <li>
                  Promote{" "}
                  <span>sustainable brands and eco-conscious content</span>
                </li>
                <li>
                  Use
                  <span>carbon-neutral web hosting</span>
                  services where possible
                </li>
                <li>
                  Develop
                  <span>energy-efficient software solutions</span>
                  with optimized code
                </li>
              </ul>
              <h6 className="mt-3">
                4. Compliance with Environmental Regulations
              </h6>
              <ul>
                <li>
                  <span>Pakistan Environmental Protection Act (PEPA) 1997</span>
                </li>
                <li>
                  <span>Punjab Environmental Quality Standards (PEQS)</span>
                </li>
                <li>
                  <span>
                    {" "}
                    Guidelines for Sustainable IT and Green Computing
                  </span>
                </li>
              </ul>
              <h6 className="mt-3">5. Monitoring & Continuous Improvement</h6>
              <ul>
                <li>
                  <span>Annual Energy Audits</span>
                  to track and optimize consumption
                </li>
                <li>
                  <span>Employee Training </span> on eco-friendly digital
                  practices
                </li>
                <li>
                  <span> Green IT Policy</span>
                  updates based on technological advancements
                </li>
              </ul>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(8)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 8 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Sustainable Resource Use Policy
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 8 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 8 ? "" : "d-none"
              }`}
            >
              <h6 className="mt-3">1. Purpose</h6>
              <p className="answer-para">
                This policy establishes FH Enterprises Private Limited’s
                commitment to sustainable resource management, ensuring
                responsible consumption and production practices that align with
                the United Nations Sustainable Development Goals (SDGs),
                particularly:
              </p>
              <ul>
                <li>
                  <span>SDG 7 - </span> Affordable and Clean Energy
                </li>
                <li>
                  <span>SDG 12 - </span> Responsible Consumption and Production
                </li>
                <li>
                  <span>SDG 13 - </span> Climate Action
                </li>
              </ul>
              <p>
                Our goal is to reduce environmental impact, optimize resource
                efficiency, and promote sustainable digital practices across our
                operations.
              </p>
              <h6 className="mt-3">2. Scope</h6>
              <p className="answer-para">This policy applies to:</p>
              <ul>
                <li>
                  <span>Energy consumption</span>in IT infrastructure and office
                  operations
                </li>
                <li>
                  <span>Digital resource management</span>to optimize cloud
                  storage and data efficiency
                </li>
                <li>
                  <span>Waste management</span>including e-waste and office
                  materials
                </li>
                <li>
                  <span>Sustainable procurement</span>of IT and office equipment
                </li>
                <li>
                  <span>Water conservation</span>in workplace facilities
                </li>
              </ul>
              <h6 className="mt-3"> 3. Key Policy Guidelines</h6>
              <h5 className="answer-para">
                A. Energy Efficiency & Climate Action (SDG 7 & SDG 13)
              </h5>
              <ul>
                <li>
                  Optimize
                  <span>IT infrastructure</span>by using energy-efficient
                  servers and cloud computing
                </li>
                <li>
                  Enable
                  <span>automatic power-saving modes</span>on all office devices
                </li>
                <li>
                  Promote
                  <span>remote work and digital meetings</span>to reduce
                  transportation emissions
                </li>
                <li>
                  Transition towards
                  <span>renewable energy sources</span>where feasible
                </li>
              </ul>
              <h5 className="answer-para">
                B. Sustainable Digital Practices & Resource Optimization (SDG
                12)
              </h5>
              <ul>
                <li>
                  Implement
                  <span>paperless operations</span> by digitizing all
                  documentation and reporting
                </li>
                <li>
                  Optimize
                  <span>cloud storage</span> and encourage efficient data
                  management to reduce energy- intensive computing
                </li>
                <li>
                  Encourage
                  <span>responsible software development</span>by minimizing
                  excessive computing power in applications
                </li>
                <li>
                  Reduce
                  <span> digital waste</span>by archiving, deleting, or
                  compressing unused files
                </li>
              </ul>
              <h5 className="answer-para">
                C. E-Waste Management & Circular Economy (SDG 12 & SDG 13)
              </h5>
              <ul>
                <li>
                  Extend the
                  <span>lifespan of IT hardware</span>through maintenance and
                  software updates
                </li>
                <li>
                  Partner with certified
                  <span>e-waste recycling facilities</span> for responsible
                  disposal
                </li>
                <li>Reuse and refurbish IT equipment where possible</li>
                <li>
                  Educate employees on
                  <span> sustainable IT disposal practices</span>
                </li>
              </ul>
              <h5 className="answer-para">
                D. Sustainable Procurement & Office Practices (SDG 12)
              </h5>
              <ul>
                <li>
                  Purchase <span>eco-friendly office supplies</span>(recycled
                  paper, biodegradable products)
                </li>
                <li>
                  Choose
                  <span>energy-efficient IT</span>equipment and peripherals
                </li>
                <li>
                  Select <span>carbon-neutral web hosting</span> providers where
                  possible
                </li>
                <li>
                  Promote the use of
                  <span> reusable office materials</span>
                  (water bottles, cutlery, stationery)
                </li>
              </ul>
              <h5 className="answer-para">
                E. Water Conservation (SDG 6 - Clean Water and Sanitation)
              </h5>
              <ul>
                <li>
                  Install <span>water-efficient </span> faucets and restroom
                  facilities
                </li>
                <li>
                  Promote
                  <span>awareness campaigns</span>on water conservation in the
                  workplace
                </li>
                <li>
                  Encourage employees to use{" "}
                  <span>reusable bottles and cups</span>instead of disposable
                  ones
                </li>
              </ul>
              <h6 className="mt-3">4. Implementation & Compliance</h6>
              <ul>
                <li>
                  Conduct
                  <span>annual sustainability audits</span>
                  to track energy, digital storage, and resource consumption
                </li>
                <li>
                  Provide
                  <span>employee training</span>
                  on digital sustainability and responsible consumption
                </li>
                <li>
                  Develop
                  <span>partnerships with green tech initiatives</span>
                  to promote sustainable IT solutions
                </li>
              </ul>
              <h6 className="mt-3">5. Monitoring & Reporting</h6>
              <ul>
                <li>
                  <span>Regular check and balance</span>
                  to ensure compliance with sustainability practices
                </li>
                <li>
                  <span>Engage with stakeholders, clients, and employees</span>
                  to identify and implement new sustainable innovations
                </li>
                <li>
                  <span> continuously update policies</span>
                  to align with evolving global sustainability standards
                </li>
              </ul>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(9)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 9 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                What makes FH Group stand out in the creative industry ?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 9 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 9 ? "" : "d-none"
              }`}
            >
              <p className="answer-para">
                At FH Group, we pride ourselves on delivering innovative and
                tailored solutions to meet every client’s unique needs. Our team
                of experts ensures the highest quality in design, development,
                advertising, and broadcasting services. With a focus on
                creativity and strategy, we aim to exceed expectations at every
                step.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(10)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 10 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                How does FH Group ensure the quality of its services ?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 10 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 10 ? "" : "d-none"
              }`}
            >
              <p className="answer-para">
                Quality is at the heart of everything we do. Our process
                involves rigorous planning, regular quality checks, and feedback
                integration. Whether it’s animation, advertisement, or content
                creation, we maintain a standard of excellence that guarantees
                customer satisfaction.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(11)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 11 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                How long does it take for FH Group to deliver a project ?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 11 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 11 ? "" : "d-none"
              }`}
            >
              <p className="answer-para">
                We understand the importance of deadlines. Our team ensures
                timely delivery by carefully managing resources and maintaining
                constant communication with clients. While the duration depends
                on the project's complexity, we always strive to deliver within
                the agreed timeframe without compromising quality.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(12)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 12 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Can FH Group handle urgent or short-deadline projects ?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 12 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 12 ? "" : "d-none"
              }`}
            >
              <p className="answer-para">
                Yes, we specialize in managing urgent projects without
                sacrificing quality. Our efficient workflows and experienced
                team allow us to adapt to tight schedules, ensuring your project
                is completed on time with the same attention to detail.
              </p>
            </div>
          </div>
          <div
            onClick={() => toggleAccordion(13)}
            className={`cs_accordion_item cs_color_1 ${
              activeIndex === 13 ? "active cs_icon" : ""
            }`}
          >
            <div className="cs_accordion_header bg_white stroke_1_whitegrey">
              <p className="cs_accordion_title cs_m0">
                Does FH Group offer post-project support ?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="30"
                style={{
                  transform: activeIndex === 13 ? "rotate(-90deg)" : "none",
                }}
              >
                <path
                  style={{ fill: `#313131` }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div
              className={`cs_accordion_body stroke_1_whitegrey ${
                activeIndex === 13 ? "" : "d-none"
              }`}
            >
              <p className="answer-para">
                Absolutely! Our relationship with clients doesn’t end after
                project delivery. We provide ongoing support to ensure that our
                solutions remain effective and impactful, helping your business
                grow and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns faq-new-quest">
          {new_ques_data.map((item, i) => (
            <div
              key={`new_${i}`} // Ensure unique keys
              onClick={() => toggleAccordion("new_ques", i)} // Pass type
              className={`cs_accordion_item cs_color_1 ${
                activeIndex.type === "new_ques" && activeIndex.index === i
                  ? "active cs_icon"
                  : ""
              }`}
            >
              <div className="cs_accordion_header bg_white stroke_1_whitegrey">
                <p className="cs_accordion_title cs_m0">{item.question}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  width="30"
                  style={{
                    transform: activeIndex
                      ? "rotate(-270deg)"
                      : "rotate(-90deg)",
                  }}
                >
                  <path
                    style={{ fill: "#313131" }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>

              <div
                className={`cs_accordion_body stroke_1_whitegrey ${
                  activeIndex.type === "new_ques" && activeIndex.index === i
                    ? ""
                    : "d-none"
                }`}
              >
                <h6>{item.points[0]}</h6>
                <p className="answer-para">{item.ans}</p>
                <h6 >{item.points[1]}</h6>
                <ul>
                  <li></li>
                </ul>
                <p className="answer-para">{item.ans}</p>
              </div>
            </div>
          ))}

          {faq_data.map((item, i) => (
            <div
              key={`faq_${i}`} // Ensure unique keys
              onClick={() => toggleAccordion("faq", i)} // Pass type
              className={`cs_accordion_item cs_color_1 ${
                activeIndex.type === "faq" && activeIndex.index === i
                  ? "active cs_icon"
                  : ""
              }`}
            >
              <div className="cs_accordion_header bg_white stroke_1_whitegrey">
                <p className="cs_accordion_title cs_m0">{item.question}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  width="30"
                  style={{
                    transform: activeIndex
                      ? "rotate(-270deg)"
                      : "rotate(-90deg)",
                  }}
                >
                  <path
                    style={{ fill: "#313131" }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>

              <div
                className={`cs_accordion_body stroke_1_whitegrey ${
                  activeIndex.type === "faq" && activeIndex.index === i
                    ? ""
                    : "d-none"
                }`}
              >
                <p className="answer-para">{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
