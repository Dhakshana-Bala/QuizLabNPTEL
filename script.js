/* ============================================================
   QuizLab — script.js
   Performance & Reward Management · 12 Weeks · 120 Questions
   Vanilla JS. No dependencies. Works fully offline.
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     1. QUESTION BANK — extracted from the source PDF
     ============================================================ */
  const QUESTION_BANK = [
    // ---------------- WEEK 1 ----------------
    {
      id: 'W1Q1', week: 1, questionNumber: 1,
      question: 'After joining a hospital in Bhubaneswar, Dr. Aditi noticed that her supervisor met her regularly throughout the year to discuss goals, progress, challenges, and development needs. At the end of the year, there was also a formal review meeting. Aditi remarked, "I thought performance management was only about annual evaluation, but this seems much broader." Which statement best explains Aditi\'s observation?',
      options: [
        { label: 'A', text: 'Performance management focuses only on salary decisions.' },
        { label: 'B', text: 'Performance management is a continuous process of managing and improving performance.' },
        { label: 'C', text: 'Performance management is mainly a disciplinary system.' },
        { label: 'D', text: 'Performance management is another name for performance appraisal.' }
      ],
      correctAnswer: 'B',
      explanation: 'It involves planning, execution, feedback, review and development rather than a single annual event.'
    },
    {
      id: 'W1Q2', week: 1, questionNumber: 2,
      question: 'Rohan\'s company conducts a formal evaluation every March. Apart from this annual meeting, managers rarely discuss performance with employees during the year. When the HR Head reviewed the system, she commented that the organization was doing appraisal but not true performance management. Why did she make this statement?',
      options: [
        { label: 'A', text: 'Appraisal focuses only on evaluation, while performance management is continuous.' },
        { label: 'B', text: 'Appraisal is more strategic than performance management.' },
        { label: 'C', text: 'Appraisal includes coaching and development.' },
        { label: 'D', text: 'Performance management occurs only after appraisal.' }
      ],
      correctAnswer: 'A',
      explanation: 'Performance appraisal is one component of the broader, ongoing performance-management process.'
    },
    {
      id: 'W1Q3', week: 1, questionNumber: 3,
      question: 'A consumer goods company wants to increase its presence in rural markets. However, during review meetings, Priya discovers that most sales executives are being evaluated only on urban sales figures. Although employees achieve their targets, the organizational objective remains unmet. What is the most likely reason?',
      options: [
        { label: 'A', text: 'Lack of financial incentives' },
        { label: 'B', text: 'Poor strategic alignment of goals' },
        { label: 'C', text: 'Excessive employee participation' },
        { label: 'D', text: 'Inadequate supervision' }
      ],
      correctAnswer: 'B',
      explanation: 'Individual goals should support organizational goals.'
    },
    {
      id: 'W1Q4', week: 1, questionNumber: 4,
      question: 'At the start of the financial year, Neha and her manager discuss expected outcomes, performance standards, timelines, and required competencies. They also identify training programs that may be needed during the year. Which stage of the performance-management process is represented?',
      options: [
        { label: 'A', text: 'Performance review' },
        { label: 'B', text: 'Performance execution' },
        { label: 'C', text: 'Performance planning' },
        { label: 'D', text: 'Performance renewal' }
      ],
      correctAnswer: 'C',
      explanation: 'Planning sets objectives, expectations, standards and development requirements.'
    },
    {
      id: 'W1Q5', week: 1, questionNumber: 5,
      question: 'Six months after setting his objectives, Arjun regularly tracks progress, coordinates with colleagues, updates stakeholders, and works toward achieving agreed targets. He has not yet reached the formal review stage. Which phase of the performance-management process is Arjun currently experiencing?',
      options: [
        { label: 'A', text: 'Performance planning' },
        { label: 'B', text: 'Performance execution' },
        { label: 'C', text: 'Performance assessment' },
        { label: 'D', text: 'Performance renewal' }
      ],
      correctAnswer: 'B',
      explanation: 'Execution means carrying out responsibilities and pursuing agreed objectives.'
    },
    {
      id: 'W1Q6', week: 1, questionNumber: 6,
      question: 'During a project, Meera frequently approaches her manager for suggestions. Her manager provides constructive guidance and discusses ways to overcome difficulties. Which approach is the manager demonstrating?',
      options: [
        { label: 'A', text: 'Continuous feedback and coaching' },
        { label: 'B', text: 'Performance ranking' },
        { label: 'C', text: 'Punitive supervision' },
        { label: 'D', text: 'Cost control' }
      ],
      correctAnswer: 'A',
      explanation: 'Regular feedback helps employees improve before formal evaluation.'
    },
    {
      id: 'W1Q7', week: 1, questionNumber: 7,
      question: 'A consulting firm allows employees considerable freedom in deciding how to complete assignments. However, each employee must explain results during review meetings and justify deviations from agreed objectives. This approach best reflects:',
      options: [
        { label: 'A', text: 'Centralized control' },
        { label: 'B', text: 'Empowerment without accountability' },
        { label: 'C', text: 'Empowerment with accountability' },
        { label: 'D', text: 'Informal supervision' }
      ],
      correctAnswer: 'C',
      explanation: 'Employees have autonomy while remaining responsible for outcomes.'
    },
    {
      id: 'W1Q8', week: 1, questionNumber: 8,
      question: 'At Sunrise Technologies, managers first establish objectives, then employees work toward them, progress is tracked periodically, and finally outcomes are reviewed to identify improvements for the next cycle. Which sequence most closely resembles this approach?',
      options: [
        { label: 'A', text: 'Plan → Act → Monitor → Review' },
        { label: 'B', text: 'Review → Plan → Reward → Monitor' },
        { label: 'C', text: 'Monitor → Reward → Review → Plan' },
        { label: 'D', text: 'Act → Evaluate → Promote → Plan' }
      ],
      correctAnswer: 'A',
      explanation: 'This sequence represents the performance-management cycle described in the source.'
    },
    {
      id: 'W1Q9', week: 1, questionNumber: 9,
      question: 'An engineering company redesigned its employee reward system. Besides salary, employees receive recognition certificates, career-development opportunities, and chances to lead important projects. Which statement best describes the organization\'s understanding of reward management?',
      options: [
        { label: 'A', text: 'Rewards consist only of monetary benefits.' },
        { label: 'B', text: 'Reward management includes both financial and non-financial rewards.' },
        { label: 'C', text: 'Rewards should be unrelated to performance.' },
        { label: 'D', text: 'Reward systems focus only on promotions.' }
      ],
      correctAnswer: 'B',
      explanation: 'Rewards encompass tangible and intangible forms of recognition and benefit.'
    },
    {
      id: 'W1Q10', week: 1, questionNumber: 10,
      question: 'Shreya and Kunal both performed exceptionally well. Shreya received a cash bonus, while Kunal was publicly recognized by the CEO during the annual meeting and given an opportunity to attend a prestigious leadership program. Which statement is most accurate?',
      options: [
        { label: 'A', text: 'Both employees received financial rewards.' },
        { label: 'B', text: 'Shreya received a non-financial reward, while Kunal received a financial reward.' },
        { label: 'C', text: 'Shreya received a financial reward, while Kunal received primarily non-financial rewards.' },
        { label: 'D', text: 'Neither employee received a reward.' }
      ],
      correctAnswer: 'C',
      explanation: 'A cash bonus is financial; recognition and development opportunities are non-financial.'
    },

    // ---------------- WEEK 2 ----------------
    {
      id: 'W2Q1', week: 2, questionNumber: 1,
      question: 'Aarav became the HR Manager of a fast-growing healthcare startup. During a strategy meeting, the CEO announced that the company wanted to become the most trusted telemedicine provider in Eastern India within five years. However, Aarav noticed that employee performance goals were still focused only on reducing administrative costs. Aarav argued that unless employee goals support the company\'s long-term aspiration, the strategy may fail. Which concept is Aarav emphasizing?',
      options: [
        { label: 'A', text: 'Job evaluation' },
        { label: 'B', text: 'Strategic alignment of performance management' },
        { label: 'C', text: 'Employee monitoring' },
        { label: 'D', text: 'Workforce downsizing' }
      ],
      correctAnswer: 'B',
      explanation: 'Employee effort and goals should align with organizational vision and long-term goals.'
    },
    {
      id: 'W2Q2', week: 2, questionNumber: 2,
      question: 'Neha and Sayan were discussing their company\'s annual planning exercise. Neha suggested that the firm should first decide how much money it wants to spend next year. Sayan disagreed and said, "We must first decide where the organization wants to go and then allocate resources accordingly." Which understanding of strategic planning is reflected in Sayan\'s statement?',
      options: [
        { label: 'A', text: 'Strategic planning focuses on employee rewards.' },
        { label: 'B', text: 'Strategic planning begins with resource allocation only.' },
        { label: 'C', text: 'Strategic planning involves determining long-term goals and allocating resources to achieve them.' },
        { label: 'D', text: 'Strategic planning is mainly concerned with operational efficiency.' }
      ],
      correctAnswer: 'C',
      explanation: 'The source attributes this understanding to Chandler\'s definition of strategy.'
    },
    {
      id: 'W2Q3', week: 2, questionNumber: 3,
      question: 'Ritika works in a textile company that has highly skilled designers and a strong reputation for quality. Recently, consumer demand for sustainable clothing has increased significantly. During a strategic review, Ritika suggested that the company should capitalize on this trend. Which SWOT combination is illustrated?',
      options: [
        { label: 'A', text: 'Weakness–Threat' },
        { label: 'B', text: 'Strength–Threat' },
        { label: 'C', text: 'Weakness–Opportunity' },
        { label: 'D', text: 'Strength–Opportunity' }
      ],
      correctAnswer: 'D',
      explanation: 'The company can use internal strengths to exploit an external opportunity.'
    },
    {
      id: 'W2Q4', week: 2, questionNumber: 4,
      question: 'During a planning workshop, Aditya pointed out that his company\'s manufacturing equipment had become outdated. Meanwhile, several new competitors had entered the market with superior technology. How should these two factors be classified in a SWOT analysis?',
      options: [
        { label: 'A', text: 'Threat and Weakness' },
        { label: 'B', text: 'Opportunity and Strength' },
        { label: 'C', text: 'Opportunity and Weakness' },
        { label: 'D', text: 'Strength and Opportunity' }
      ],
      correctAnswer: 'A',
      explanation: 'Outdated equipment is an internal weakness; new competitors are an external threat.'
    },
    {
      id: 'W2Q5', week: 2, questionNumber: 5,
      question: 'Megha was asked to draft a vision statement for her organization. Her first draft read: "We hope to do many good things for many people in the future." The CEO rejected it, stating that employees would struggle to understand or be inspired by it. What was the primary weakness of Megha\'s vision statement?',
      options: [
        { label: 'A', text: 'It was too specific.' },
        { label: 'B', text: 'It lacked clarity and inspiration.' },
        { label: 'C', text: 'It focused on customers.' },
        { label: 'D', text: 'It was measurable.' }
      ],
      correctAnswer: 'B',
      explanation: 'A vision should be clear, inspiring and provide future direction.'
    },
    {
      id: 'W2Q6', week: 2, questionNumber: 6,
      question: 'Karan manages a software-development team. To improve project-completion rates, he introduced a system where team members receive performance bonuses only when projects are delivered successfully and on time. Which strategic role of reward management is most evident?',
      options: [
        { label: 'A', text: 'Encouraging absenteeism' },
        { label: 'B', text: 'Reward-performance linkage' },
        { label: 'C', text: 'Workforce reduction' },
        { label: 'D', text: 'Job enrichment' }
      ],
      correctAnswer: 'B',
      explanation: 'Rewards are linked directly to desired performance outcomes.'
    },
    {
      id: 'W2Q7', week: 2, questionNumber: 7,
      question: 'At an automobile company, employee performance reviews focus heavily on innovation because the firm\'s strategic objective is to become a leader in electric vehicles. Employees who contribute new ideas receive special recognition and incentives. Why is this an example of strategic performance management?',
      options: [
        { label: 'A', text: 'Employees are rewarded equally.' },
        { label: 'B', text: 'Performance criteria are unrelated to strategy.' },
        { label: 'C', text: 'Employee behaviour is being directed toward strategic priorities.' },
        { label: 'D', text: 'The organization is avoiding formal evaluations.' }
      ],
      correctAnswer: 'C',
      explanation: 'Performance and recognition support the organization\'s EV-leadership goal.'
    },
    {
      id: 'W2Q8', week: 2, questionNumber: 8,
      question: 'Sohini was given the following objective: "Improve customer satisfaction significantly." She argued that the objective would be difficult to evaluate because different managers might interpret it differently. Which revision would make the objective SMART?',
      options: [
        { label: 'A', text: 'Improve customer satisfaction someday.' },
        { label: 'B', text: 'Improve customer satisfaction whenever possible.' },
        { label: 'C', text: 'Increase customer satisfaction scores from 80% to 90% within the next 12 months.' },
        { label: 'D', text: 'Try to make customers happier.' }
      ],
      correctAnswer: 'C',
      explanation: 'It is specific, measurable and time-bound, with a defined target.'
    },
    {
      id: 'W2Q9', week: 2, questionNumber: 9,
      question: 'A pharmaceutical company developed an ambitious five-year strategy. However, employee appraisals, rewards, and departmental objectives remained unchanged. Two years later, management realized that the strategy had produced very little impact. What was the most likely reason?',
      options: [
        { label: 'A', text: 'The strategy was too long-term.' },
        { label: 'B', text: 'Performance management and reward systems were not aligned with the strategy.' },
        { label: 'C', text: 'Employees received excessive feedback.' },
        { label: 'D', text: 'The vision statement was too short.' }
      ],
      correctAnswer: 'B',
      explanation: 'Strategy implementation needs aligned objectives, appraisals and rewards.'
    },
    {
      id: 'W2Q10', week: 2, questionNumber: 10,
      question: 'Aniket, Priyanka, and Sreya were part of a strategic-planning committee. Aniket proposed launching several new products immediately because competitors were doing so. Priyanka suggested first understanding the organization\'s strengths, weaknesses, opportunities, and threats. Sreya supported Priyanka, arguing that strategic decisions should be based on environmental analysis rather than imitation. Why did Priyanka\'s approach represent better strategic planning?',
      options: [
        { label: 'A', text: 'SWOT analysis helps understand internal and external factors before making strategic decisions.' },
        { label: 'B', text: 'Competitors should never be studied.' },
        { label: 'C', text: 'New products are unrelated to strategy.' },
        { label: 'D', text: 'Strategic planning should avoid long-term thinking.' }
      ],
      correctAnswer: 'A',
      explanation: 'SWOT provides a structured review of internal capabilities and external conditions.'
    },

    // ---------------- WEEK 3 ----------------
    {
      id: 'W3Q1', week: 3, questionNumber: 1,
      question: 'Ritwik joined a pharmaceutical company as a medical representative. He knows all the details about the company\'s products and can explain their features perfectly during training sessions. However, when meeting doctors, he struggles to present the information persuasively and often fails to close discussions effectively. Which component of performance appears to be lacking?',
      options: [
        { label: 'A', text: 'Declarative knowledge' },
        { label: 'B', text: 'Procedural knowledge' },
        { label: 'C', text: 'Motivation' },
        { label: 'D', text: 'Contextual performance' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W3Q2', week: 3, questionNumber: 2,
      question: 'At a manufacturing company, Priyanka always completes her assigned tasks on time. In addition, she voluntarily helps new employees understand work procedures, shares useful information with colleagues, and frequently assists her team during emergencies. Which aspect of performance is best illustrated by Priyanka\'s additional activities?',
      options: [
        { label: 'A', text: 'Task performance' },
        { label: 'B', text: 'Technical competence' },
        { label: 'C', text: 'Contextual performance' },
        { label: 'D', text: 'Results performance' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W3Q3', week: 3, questionNumber: 3,
      question: 'A retail chain evaluates store managers solely on annual sales growth and profitability. The company deliberately avoids assessing how managers achieve those outcomes. Which performance measurement approach is being used?',
      options: [
        { label: 'A', text: 'Trait approach' },
        { label: 'B', text: 'Behaviour approach' },
        { label: 'C', text: 'Results approach' },
        { label: 'D', text: 'Competency approach' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W3Q4', week: 3, questionNumber: 4,
      question: 'Megha\'s manager gives her the objective: "Try to improve customer service as much as possible." Megha is unsure how success will be measured because the objective lacks specific targets and timelines. What is the primary problem with this objective?',
      options: [
        { label: 'A', text: 'It is too challenging.' },
        { label: 'B', text: 'It is not aligned with strategy.' },
        { label: 'C', text: 'It lacks specificity and measurability.' },
        { label: 'D', text: 'It focuses on customers.' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W3Q5', week: 3, questionNumber: 5,
      question: 'A hospital is recruiting nurses. During selection, applicants must demonstrate that they can accurately record patient information and follow basic treatment protocols. These capabilities are considered essential for performing the job at an acceptable level. These capabilities are best described as:',
      options: [
        { label: 'A', text: 'Differentiating competencies' },
        { label: 'B', text: 'Leadership competencies' },
        { label: 'C', text: 'Threshold competencies' },
        { label: 'D', text: 'Strategic competencies' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W3Q6', week: 3, questionNumber: 6,
      question: 'A customer service department has been receiving increasing numbers of complaints. During an internal review, Ayan discovers that employees have never been given clear service standards or measurable targets. Before evaluating employee performance, what should management do first?',
      options: [
        { label: 'A', text: 'Reduce employee incentives' },
        { label: 'B', text: 'Introduce stricter supervision' },
        { label: 'C', text: 'Define clear performance objectives and standards' },
        { label: 'D', text: 'Replace underperforming employees' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W3Q7', week: 3, questionNumber: 7,
      question: 'Sreya supervises four analysts. One of them, Nikhil, recently developed an innovative dashboard that impressed senior management. During the annual appraisal, Sreya rated Nikhil as outstanding in every category, including teamwork, communication, punctuality, and documentation quality, even though evidence suggested average performance in some areas. Which rating error is most likely influencing Sreya\'s evaluation?',
      options: [
        { label: 'A', text: 'Recency error' },
        { label: 'B', text: 'Halo error' },
        { label: 'C', text: 'Central tendency error' },
        { label: 'D', text: 'Contrast error' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W3Q8', week: 3, questionNumber: 8,
      question: 'An IT company wants to evaluate whether project leaders encourage collaboration, communicate effectively, resolve conflicts, and support team members throughout projects. Which measurement approach would be most suitable?',
      options: [
        { label: 'A', text: 'Results approach' },
        { label: 'B', text: 'Behaviour approach' },
        { label: 'C', text: 'Financial approach' },
        { label: 'D', text: 'Output approach' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W3Q9', week: 3, questionNumber: 9,
      question: 'When evaluating Kavya\'s leadership effectiveness, the organization collects feedback from her supervisor, colleagues, subordinates, and major clients. Which advantage is most directly associated with this approach?',
      options: [
        { label: 'A', text: 'It reduces the need for employee development.' },
        { label: 'B', text: 'It captures performance from multiple perspectives.' },
        { label: 'C', text: 'It focuses only on objective results.' },
        { label: 'D', text: 'It eliminates all rating errors.' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W3Q10', week: 3, questionNumber: 10,
      question: 'Rahul is leading the implementation of a new performance management system. His colleague Ananya suggests launching the system immediately and explaining it to employees later. Rahul disagrees and insists that managers first communicate the purpose, process, and benefits of the new system through workshops and discussions. Why is Rahul\'s approach more appropriate?',
      options: [
        { label: 'A', text: 'Employees should design the entire system themselves.' },
        { label: 'B', text: 'Communication reduces the need for performance reviews.' },
        { label: 'C', text: 'Effective communication builds understanding, trust, and acceptance of the system.' },
        { label: 'D', text: 'Communication is required only for legal compliance.' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },

    // ---------------- WEEK 4 ----------------
    {
      id: 'W4Q1', week: 4, questionNumber: 1,
      question: 'A manufacturing company spent six months designing a sophisticated Performance Management System. However, after implementation, employees complained that they did not understand what was expected of them. Different departments were pursuing different priorities, and managers used different criteria to evaluate performance. What is the most likely reason for the failure of the PMS?',
      options: [
        { label: 'A', text: 'Employees received insufficient incentives' },
        { label: 'B', text: 'Poor goal setting and lack of strategic clarity' },
        { label: 'C', text: 'Excessive use of technology' },
        { label: 'D', text: 'Too many training programs' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W4Q2', week: 4, questionNumber: 2,
      question: 'At a consulting firm, managers are instructed that approximately 10% of employees must be rated as outstanding, 70% as average performers, and 20% as below average, regardless of actual performance levels. Which appraisal approach is the company using?',
      options: [
        { label: 'A', text: 'Critical Incident Method' },
        { label: 'B', text: 'Bell Curve Method' },
        { label: 'C', text: 'BARS Method' },
        { label: 'D', text: 'Assessment Centre Method' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W4Q3', week: 4, questionNumber: 3,
      question: 'At the beginning of the year, Aditi and her manager jointly decide performance goals. Throughout the year they review progress together, and at year-end performance is evaluated against the agreed objectives. Which appraisal philosophy is being applied?',
      options: [
        { label: 'A', text: 'Forced Ranking' },
        { label: 'B', text: 'Management by Objectives (MBO)' },
        { label: 'C', text: 'Graphic Rating Scale' },
        { label: 'D', text: 'Confidential Reporting' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W4Q4', week: 4, questionNumber: 4,
      question: 'Rahul supervises a customer service team. Instead of relying only on annual ratings, he maintains records of important incidents throughout the year—for example, when an employee successfully handled an angry customer or when another employee created a major service failure. Which appraisal method is Rahul using?',
      options: [
        { label: 'A', text: 'Ranking Method' },
        { label: 'B', text: 'Paired Comparison Method' },
        { label: 'C', text: 'Critical Incident Method' },
        { label: 'D', text: 'Bell Curve Method' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W4Q5', week: 4, questionNumber: 5,
      question: 'When introducing a new PMS, Megha\'s company immediately began conducting evaluations without explaining the purpose of the system. Employees believed the system was designed mainly to identify people for termination. Rumours spread quickly, and many employees opposed the initiative. What implementation mistake is most evident?',
      options: [
        { label: 'A', text: 'Lack of communication and awareness-building' },
        { label: 'B', text: 'Excessive employee participation' },
        { label: 'C', text: 'Overemphasis on rewards' },
        { label: 'D', text: 'Too much performance feedback' }
      ],
      correctAnswer: 'A',
      explanation: ''
    },
    {
      id: 'W4Q6', week: 4, questionNumber: 6,
      question: 'A software company spends considerable effort defining SMART objectives at the start of the year. However, during performance reviews, managers ignore those objectives and rely entirely on personal impressions to rate employees. Which implementation problem is illustrated?',
      options: [
        { label: 'A', text: 'Effective performance monitoring' },
        { label: 'B', text: 'Alignment between planning and review' },
        { label: 'C', text: 'Disconnection between goal-setting and evaluation' },
        { label: 'D', text: 'Excessive employee empowerment' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W4Q7', week: 4, questionNumber: 7,
      question: 'Ananya works in a government-owned enterprise. Earlier, performance reports were confidential, and employees rarely knew how they had been assessed. Under a new system, employees can view their assessments, discuss ratings with supervisors, and provide feedback before reports are finalized. What major change does this new system represent?',
      options: [
        { label: 'A', text: 'Increased secrecy in appraisals' },
        { label: 'B', text: 'Shift toward transparent and participative appraisal' },
        { label: 'C', text: 'Elimination of performance evaluation' },
        { label: 'D', text: 'Complete replacement of supervisors' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W4Q8', week: 4, questionNumber: 8,
      question: 'A bank wants to evaluate branch managers. For each performance dimension, HR develops specific behavioural examples representing poor, average, and excellent performance. Evaluators use these examples while assigning ratings. Which appraisal method is being used?',
      options: [
        { label: 'A', text: 'Assessment Centre' },
        { label: 'B', text: 'Behaviourally Anchored Rating Scales (BARS)' },
        { label: 'C', text: 'Forced Distribution' },
        { label: 'D', text: 'Essay Method' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W4Q9', week: 4, questionNumber: 9,
      question: 'Before promoting managers to senior leadership positions, a company invites candidates to participate in business simulations, group discussions, role plays, and case analyses. Trained assessors observe and evaluate behaviour throughout these exercises. Which appraisal technique is being used?',
      options: [
        { label: 'A', text: 'Assessment Centre Method' },
        { label: 'B', text: 'Bell Curve Method' },
        { label: 'C', text: 'Critical Incident Method' },
        { label: 'D', text: 'Graphic Rating Scale' }
      ],
      correctAnswer: 'A',
      explanation: ''
    },
    {
      id: 'W4Q10', week: 4, questionNumber: 10,
      question: 'Sourav manages a team of eight engineers. One of them, Naina, consistently delivers exceptional work, solves complex technical problems, and is widely recognized for her contributions. During appraisal discussions, however, Sourav gives almost every team member a rating of "Average" because he wants to avoid difficult conversations and maintain harmony within the team. Which rating error is most evident?',
      options: [
        { label: 'A', text: 'Halo Error' },
        { label: 'B', text: 'Leniency Error' },
        { label: 'C', text: 'Central Tendency Error' },
        { label: 'D', text: 'Recency Error' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },

    // ---------------- WEEK 5 ----------------
    {
      id: 'W5Q1', week: 5, questionNumber: 1,
      question: 'Ananya works in a pharmaceutical company. During her annual review, her manager does not focus only on current performance. Instead, they discuss future career aspirations, skills she would like to develop, training opportunities, and experiences that could prepare her for larger responsibilities. Which activity is most clearly being undertaken?',
      options: [
        { label: 'A', text: 'Job evaluation' },
        { label: 'B', text: 'Personal Development Planning' },
        { label: 'C', text: 'Workforce planning' },
        { label: 'D', text: 'Compensation benchmarking' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W5Q2', week: 5, questionNumber: 2,
      question: 'Rahul exceeded his sales targets for three consecutive quarters. During the annual meeting, the CEO publicly praised his contribution, featured his achievements in the company newsletter, and invited him to present best practices to other teams. What type of reward has Rahul primarily received?',
      options: [
        { label: 'A', text: 'Direct financial reward' },
        { label: 'B', text: 'Deferred compensation' },
        { label: 'C', text: 'Non-financial reward' },
        { label: 'D', text: 'Retirement benefit' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W5Q3', week: 5, questionNumber: 3,
      question: 'Megha has recently been promoted to a supervisory role. Instead of sending her to a one-time training workshop, her manager meets her every week, discusses real workplace challenges, provides feedback, and helps her improve her leadership skills while she performs her job. Which developmental approach is being used?',
      options: [
        { label: 'A', text: 'Job rotation' },
        { label: 'B', text: 'Coaching' },
        { label: 'C', text: 'Assessment centre' },
        { label: 'D', text: 'Performance ranking' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W5Q4', week: 5, questionNumber: 4,
      question: 'A consumer goods company launches a six-month initiative to introduce an eco-friendly product line. Employees from marketing, finance, production, and logistics are temporarily brought together to complete the project and will return to their original departments after completion. What type of team has been formed?',
      options: [
        { label: 'A', text: 'Work team' },
        { label: 'B', text: 'Service team' },
        { label: 'C', text: 'Project team' },
        { label: 'D', text: 'Self-managed team' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W5Q5', week: 5, questionNumber: 5,
      question: 'Arjun manages a team of five analysts. At the end of the year, every team member receives the same performance bonus, regardless of individual effort. Over time, Arjun notices that some employees contribute less because they know they will receive the same reward as everyone else. Which problem is most likely occurring?',
      options: [
        { label: 'A', text: 'Job enrichment' },
        { label: 'B', text: 'Strategic dialogue' },
        { label: 'C', text: 'Social loafing' },
        { label: 'D', text: 'Competency mapping' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W5Q6', week: 5, questionNumber: 6,
      question: 'Shreya successfully handled a difficult client crisis that prevented the loss of a major account. During the monthly town hall meeting, her manager highlighted her achievement and invited her to lead a high-visibility client project. What is the most likely impact of this reward?',
      options: [
        { label: 'A', text: 'Reduced employee motivation' },
        { label: 'B', text: 'Increased intrinsic motivation and recognition' },
        { label: 'C', text: 'Lower team cohesion' },
        { label: 'D', text: 'Greater dependence on financial incentives' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W5Q7', week: 5, questionNumber: 7,
      question: 'Mainak\'s software development team consists of Naina, Riddhi, and Arka. Naina consistently works late to solve technical problems, while Arka contributes much less. When the project succeeds, everyone receives exactly the same bonus. Why might Naina perceive the reward system as unfair?',
      options: [
        { label: 'A', text: 'The team was too small.' },
        { label: 'B', text: 'Rewards were not linked to individual contribution.' },
        { label: 'C', text: 'The project ended successfully.' },
        { label: 'D', text: 'Team rewards should always be equal.' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W5Q8', week: 5, questionNumber: 8,
      question: 'At a consulting firm, project bonuses are distributed using two components: 70% depends on team performance and 30% depends on each member\'s individual contribution. What is the main advantage of this approach?',
      options: [
        { label: 'A', text: 'It completely eliminates competition.' },
        { label: 'B', text: 'It discourages teamwork.' },
        { label: 'C', text: 'It balances team collaboration with individual accountability.' },
        { label: 'D', text: 'It removes the need for performance evaluation.' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W5Q9', week: 5, questionNumber: 9,
      question: 'Sayan has recently joined a technology company. Whenever he encounters difficulties, his senior colleague Jiko reviews his work, explains mistakes, provides suggestions, and gradually gives him more challenging assignments as his confidence improves. Which role is Jiko primarily performing?',
      options: [
        { label: 'A', text: 'Auditor' },
        { label: 'B', text: 'Coach' },
        { label: 'C', text: 'Recruiter' },
        { label: 'D', text: 'Compensation specialist' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W5Q10', week: 5, questionNumber: 10,
      question: 'During a career discussion, Priyanka\'s manager asks questions such as: "Where do you see yourself in five years?" "What kind of work gives you the greatest sense of purpose?" "What capabilities would you like to develop for your future career?" What type of conversation is taking place?',
      options: [
        { label: 'A', text: 'Corrective feedback session' },
        { label: 'B', text: 'Technical review meeting' },
        { label: 'C', text: 'Strategic dialogue' },
        { label: 'D', text: 'Disciplinary interview' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },

    // ---------------- WEEK 6 ----------------
    {
      id: 'W6Q1', week: 6, questionNumber: 1,
      question: 'Riddhi works for a multinational IT company. Apart from her salary, she receives performance bonuses, health insurance, flexible work arrangements, learning opportunities, and recognition from senior leaders. During a discussion, she remarks that the organization seems to reward employees in many different ways, not just through pay. Which reward philosophy is most evident?',
      options: [
        { label: 'A', text: 'Performance-related pay' },
        { label: 'B', text: 'Total Reward approach' },
        { label: 'C', text: 'Job evaluation system' },
        { label: 'D', text: 'Piece-rate compensation' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W6Q2', week: 6, questionNumber: 2,
      question: 'Aarav recently received a promotion offer from a competitor. Although the competitor offered a slightly higher salary, he decided to stay because his current employer provided flexible working hours, career development opportunities, meaningful work, and a supportive culture. Which concept best explains Aarav\'s decision?',
      options: [
        { label: 'A', text: 'Variable pay' },
        { label: 'B', text: 'Procedural justice' },
        { label: 'C', text: 'Relational rewards' },
        { label: 'D', text: 'Job enlargement' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W6Q3', week: 6, questionNumber: 3,
      question: 'A pharmaceutical company wants to become a leader in innovation over the next five years. To support this goal, the HR department redesigns rewards so that employees who generate successful product ideas receive long-term incentives and recognition. This is an example of:',
      options: [
        { label: 'A', text: 'Administrative compensation' },
        { label: 'B', text: 'Strategic Reward Management' },
        { label: 'C', text: 'Seniority-based pay' },
        { label: 'D', text: 'Cost-cutting compensation' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W6Q4', week: 6, questionNumber: 4,
      question: 'Megha and Aniket work in different departments but perform jobs requiring similar skills, responsibilities, and effort. Megha discovers that Aniket receives significantly higher pay without any clear justification. She begins to feel dissatisfied and questions the fairness of the reward system. Which principle is most directly being challenged?',
      options: [
        { label: 'A', text: 'Transparency' },
        { label: 'B', text: 'Flexibility' },
        { label: 'C', text: 'Equity' },
        { label: 'D', text: 'Teamwork' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W6Q5', week: 6, questionNumber: 5,
      question: 'During an employee survey, Priyanka reports that she is satisfied with her salary but feels frustrated because the company provides limited opportunities for learning, career growth, and meaningful work. According to the Hay Group model of engaged performance, which pillar is most clearly lacking?',
      options: [
        { label: 'A', text: 'Tangible rewards' },
        { label: 'B', text: 'Future growth opportunity' },
        { label: 'C', text: 'Procedural justice' },
        { label: 'D', text: 'Job evaluation' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W6Q6', week: 6, questionNumber: 6,
      question: 'A multinational company assigns Sayan from India to lead a project in Germany for two years. The organization provides relocation assistance, housing support, education benefits for his children, and a foreign-service allowance in addition to his regular salary. Which area of reward management does this scenario best represent?',
      options: [
        { label: 'A', text: 'Team reward management' },
        { label: 'B', text: 'International reward management' },
        { label: 'C', text: 'Competency-based pay' },
        { label: 'D', text: 'Gain-sharing' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W6Q7', week: 6, questionNumber: 7,
      question: 'At a large engineering firm, employees understand exactly how bonuses are calculated, who makes reward decisions, and how they can appeal if they believe a decision is unfair. Which characteristic of the reward system is most evident?',
      options: [
        { label: 'A', text: 'Centralization' },
        { label: 'B', text: 'Transparency' },
        { label: 'C', text: 'Confidentiality' },
        { label: 'D', text: 'Standardization' }
      ],
      correctAnswer: 'B',
      explanation: ''
    },
    {
      id: 'W6Q8', week: 6, questionNumber: 8,
      question: 'Naina leads a team where promotion decisions are made using clearly documented criteria that apply equally to all employees. Even employees who are not promoted generally accept the decisions because they believe the process was fair. Which principle is illustrated?',
      options: [
        { label: 'A', text: 'Distributive justice' },
        { label: 'B', text: 'Procedural justice' },
        { label: 'C', text: 'External equity' },
        { label: 'D', text: 'Financial reward' }
      ],
      correctAnswer: 'A',
      explanation: ''
    },
    {
      id: 'W6Q9', week: 6, questionNumber: 9,
      question: 'A technology company provides employees with modern tools, safe working conditions, skill development opportunities, and access to information needed to perform effectively. Management believes these factors are essential for maintaining employee engagement. According to the Hay Group model, which pillar is being emphasized?',
      options: [
        { label: 'A', text: 'Tangible rewards' },
        { label: 'B', text: 'Future growth' },
        { label: 'C', text: 'Enabling environment' },
        { label: 'D', text: 'Work-life balance' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },
    {
      id: 'W6Q10', week: 6, questionNumber: 10,
      question: 'During a review of compensation policies, Arka suggests paying everyone exactly the same salary to avoid complaints about fairness. Riddhi disagrees, arguing that fairness does not necessarily mean equality. Which statement best supports Riddhi\'s position?',
      options: [
        { label: 'A', text: 'Fair reward systems should ignore performance differences.' },
        { label: 'B', text: 'Equality and equity always mean the same thing.' },
        { label: 'C', text: 'Fairness requires rewards to reflect contribution and performance.' },
        { label: 'D', text: 'Transparency is more important than performance.' }
      ],
      correctAnswer: 'C',
      explanation: ''
    },

    // ---------------- WEEK 7 ----------------
    {
      id: 'W7Q1', week: 7, questionNumber: 1,
      question: 'A manufacturing company was facing high employee turnover despite paying industry-average wages. The HR Director, Priyanka, proposed paying employees significantly above market rates. Within a year, turnover declined, productivity increased, and absenteeism fell. Which theory best explains this outcome?',
      options: [
        { label: 'A', text: 'Human Capital Theory' },
        { label: 'B', text: 'Equity Theory' },
        { label: 'C', text: 'Efficiency Wage Theory' },
        { label: 'D', text: 'Reinforcement Theory' }
      ],
      correctAnswer: 'C',
      explanation: 'Paying above-market wages can improve motivation and productivity while helping reduce employee turnover.'
    },
    {
      id: 'W7Q2', week: 7, questionNumber: 2,
      question: 'Arka works in an automobile manufacturing plant. Management introduced a scheme under which employees receive a share of the savings generated when workers suggest ideas that improve productivity or reduce waste. Employees now actively participate in problem-solving meetings. Which reward plan is being used?',
      options: [
        { label: 'A', text: 'ESOP Plan' },
        { label: 'B', text: 'Scanlon Plan' },
        { label: 'C', text: 'Cafeteria Benefit Plan' },
        { label: 'D', text: 'Halsey Plan' }
      ],
      correctAnswer: 'B',
      explanation: 'The Scanlon Plan rewards employees through savings generated by productivity improvements and employee suggestions.'
    },
    {
      id: 'W7Q3', week: 7, questionNumber: 3,
      question: 'At a textile factory, workers are paid entirely according to the number of units produced. Employees who fail to achieve the expected standard receive no guaranteed minimum wage. Which incentive plan most closely resembles this arrangement?',
      options: [
        { label: 'A', text: 'Rowan Plan' },
        { label: 'B', text: 'Halsey Plan' },
        { label: 'C', text: 'Taylor\'s Differential Piece Rate System' },
        { label: 'D', text: 'Gantt Task and Bonus Plan' }
      ],
      correctAnswer: 'C',
      explanation: 'Taylor\'s plan uses different piece rates according to whether workers meet the production standard.'
    },
    {
      id: 'W7Q4', week: 7, questionNumber: 4,
      question: 'Riddhi joins a fast-growing technology startup. Instead of offering a large cash bonus, the company grants her stock options that can be converted into company shares after a few years if she remains with the organization. What is the primary objective of this reward?',
      options: [
        { label: 'A', text: 'Reducing training costs' },
        { label: 'B', text: 'Providing a welfare benefit' },
        { label: 'C', text: 'Creating employee ownership and long-term commitment' },
        { label: 'D', text: 'Replacing fixed salaries' }
      ],
      correctAnswer: 'C',
      explanation: 'Stock options encourage employees to share in the company\'s future success and provide an incentive to remain with the organization.'
    },
    {
      id: 'W7Q5', week: 7, questionNumber: 5,
      question: 'Naina\'s annual compensation package consists of a fixed salary plus an additional payment that depends on achieving specific performance targets. Employees who exceed expectations receive higher rewards. What type of reward arrangement is being used?',
      options: [
        { label: 'A', text: 'Base pay system' },
        { label: 'B', text: 'Contingent pay system' },
        { label: 'C', text: 'Seniority pay system' },
        { label: 'D', text: 'Equal reward system' }
      ],
      correctAnswer: 'B',
      explanation: 'The additional payment depends on performance, so it is contingent on achieving specified targets.'
    },
    {
      id: 'W7Q6', week: 7, questionNumber: 6,
      question: 'Sayan recently left his organization after 20 years of service. During the exit process, he received a retirement benefit accumulated through mandatory monthly contributions made by both him and his employer throughout his career. Which benefit is being described?',
      options: [
        { label: 'A', text: 'ESOP' },
        { label: 'B', text: 'Provident Fund' },
        { label: 'C', text: 'Performance Bonus' },
        { label: 'D', text: 'Retention Allowance' }
      ],
      correctAnswer: 'B',
      explanation: 'A provident fund accumulates retirement savings through contributions from the employee and employer.'
    },
    {
      id: 'W7Q7', week: 7, questionNumber: 7,
      question: 'A consulting firm introduces a bonus scheme in which project managers receive incentives only when they achieve predefined client satisfaction, profitability, and project completion targets. Which reward principle is most evident?',
      options: [
        { label: 'A', text: 'Team-based compensation' },
        { label: 'B', text: 'Performance-related pay' },
        { label: 'C', text: 'Fixed compensation' },
        { label: 'D', text: 'Seniority-based rewards' }
      ],
      correctAnswer: 'B',
      explanation: 'The bonus is directly linked to defined performance results.'
    },
    {
      id: 'W7Q8', week: 7, questionNumber: 8,
      question: 'Ananya and Megha perform similar jobs and generate similar results. However, Ananya receives higher compensation because she possesses specialized certifications and advanced analytical skills that significantly enhance her productivity. Which theory best explains this difference?',
      options: [
        { label: 'A', text: 'Equity Theory' },
        { label: 'B', text: 'Expectancy Theory' },
        { label: 'C', text: 'Human Capital Theory' },
        { label: 'D', text: 'Reinforcement Theory' }
      ],
      correctAnswer: 'C',
      explanation: 'Specialized skills, education and certifications represent human capital that can increase an employee\'s productivity.'
    },
    {
      id: 'W7Q9', week: 7, questionNumber: 9,
      question: 'A company introduces a flexible benefits program. Employees receive a fixed benefit budget and can choose among options such as additional health insurance, childcare support, education assistance, or travel benefits based on personal needs. Which reward approach is being used?',
      options: [
        { label: 'A', text: 'Fixed Benefits Plan' },
        { label: 'B', text: 'Recognition Scheme' },
        { label: 'C', text: 'Cafeteria (Flex-Fund) Plan' },
        { label: 'D', text: 'Gain-Sharing Plan' }
      ],
      correctAnswer: 'C',
      explanation: 'Employees choose benefits from a menu within a fixed benefits allowance.'
    },
    {
      id: 'W7Q10', week: 7, questionNumber: 10,
      question: 'Mainak\'s organization notices rising levels of employee stress and burnout. In response, the company introduces yoga sessions, mental health counselling, fitness memberships, and preventive health check-ups. Which type of reward initiative is this?',
      options: [
        { label: 'A', text: 'Team pay scheme' },
        { label: 'B', text: 'Wellness program' },
        { label: 'C', text: 'Contingent pay plan' },
        { label: 'D', text: 'Recognition scheme' }
      ],
      correctAnswer: 'B',
      explanation: 'These initiatives support employee health, well-being and stress management.'
    },

    // ---------------- WEEK 8 ----------------
    {
      id: 'W8Q1', week: 8, questionNumber: 1,
      question: 'A rapidly growing healthcare organization discovered that two department managers were performing jobs with very different levels of responsibility, decision-making authority, and financial accountability. However, both positions were placed in the same pay grade because they had similar job titles. Employee dissatisfaction soon followed. What was the most fundamental mistake made by the organization?',
      options: [
        { label: 'A', text: 'Failure to conduct market rate analysis' },
        { label: 'B', text: 'Failure to evaluate the relative worth of jobs' },
        { label: 'C', text: 'Failure to introduce broad-banding' },
        { label: 'D', text: 'Failure to implement performance-related pay' }
      ],
      correctAnswer: 'B',
      explanation: 'Job evaluation determines the relative worth of jobs. Similar job titles do not necessarily mean that jobs have equal responsibility or value.'
    },
    {
      id: 'W8Q2', week: 8, questionNumber: 2,
      question: 'Priyanka is designing a compensation structure for a new manufacturing firm. She notices that experienced CNC machine operators are receiving significantly higher salaries than before because several competing firms are recruiting aggressively from the same labor pool. Which theory best explains the increase in wages?',
      options: [
        { label: 'A', text: 'Agency Theory' },
        { label: 'B', text: 'Equity Theory' },
        { label: 'C', text: 'Classical Economic Theory' },
        { label: 'D', text: 'Expectancy Theory' }
      ],
      correctAnswer: 'C',
      explanation: 'When demand for skilled workers rises relative to supply, employers may need to offer higher wages to attract and retain them.'
    },
    {
      id: 'W8Q3', week: 8, questionNumber: 3,
      question: 'While evaluating jobs, Riddhi identifies four compensable factors: knowledge, problem-solving, responsibility, and working conditions. Each factor is assigned a weight and numerical score before jobs are evaluated. Which job evaluation method is she using?',
      options: [
        { label: 'A', text: 'Job Ranking Method' },
        { label: 'B', text: 'Paired Comparison Method' },
        { label: 'C', text: 'Point-Factor Method' },
        { label: 'D', text: 'Job Classification Method' }
      ],
      correctAnswer: 'C',
      explanation: 'The Point-Factor Method evaluates jobs using weighted, scored compensable factors.'
    },
    {
      id: 'W8Q4', week: 8, questionNumber: 4,
      question: 'The shareholders of a technology company believe that senior executives are focusing on short-term personal gains rather than long-term organizational success. To address this issue, the board introduces stock-based compensation linked to future company performance. Which theory best supports this decision?',
      options: [
        { label: 'A', text: 'Human Capital Theory' },
        { label: 'B', text: 'Agency Theory' },
        { label: 'C', text: 'Labour Theory of Value' },
        { label: 'D', text: 'Reinforcement Theory' }
      ],
      correctAnswer: 'B',
      explanation: 'Agency Theory addresses the potential conflict between shareholders (principals) and executives (agents). Performance-linked stock compensation can align their interests.'
    },
    {
      id: 'W8Q5', week: 8, questionNumber: 5,
      question: 'An HR team has decided to use the Point-Factor Method to evaluate jobs. Before assigning any points, the team spends considerable time identifying factors such as skill requirements, responsibility levels, and effort involved. Why is this step critical?',
      options: [
        { label: 'A', text: 'It determines market salary levels.' },
        { label: 'B', text: 'It establishes the compensable factors against which jobs will be assessed.' },
        { label: 'C', text: 'It assigns employees to grades.' },
        { label: 'D', text: 'It eliminates external wage comparisons.' }
      ],
      correctAnswer: 'B',
      explanation: 'Jobs must first be assessed against clearly identified factors before scores can be assigned meaningfully.'
    },
    {
      id: 'W8Q6', week: 8, questionNumber: 6,
      question: 'Arka is evaluating a newly created role of "Digital Transformation Manager." Since the position is unique, he compares it with several existing organizational roles that have already been evaluated and graded. Which technique is Arka applying?',
      options: [
        { label: 'A', text: 'Market Pricing' },
        { label: 'B', text: 'External Benchmarking' },
        { label: 'C', text: 'Internal Benchmarking' },
        { label: 'D', text: 'Competency Mapping' }
      ],
      correctAnswer: 'C',
      explanation: 'The new role is being compared with existing evaluated jobs within the same organization.'
    },
    {
      id: 'W8Q7', week: 8, questionNumber: 7,
      question: 'A multinational company replaces its 18 pay grades with only 5 wide salary bands. Managers now have greater flexibility to reward employees without requiring promotions every time compensation increases. Which pay structure has been adopted?',
      options: [
        { label: 'A', text: 'Narrow-Graded Structure' },
        { label: 'B', text: 'Job Family Structure' },
        { label: 'C', text: 'Broad-Banded Structure' },
        { label: 'D', text: 'Spot Salary Structure' }
      ],
      correctAnswer: 'C',
      explanation: 'Broad-banding consolidates multiple grades into a smaller number of wider salary bands.'
    },
    {
      id: 'W8Q8', week: 8, questionNumber: 8,
      question: 'Sayani conducts a compensation survey and discovers that software architects in her organization earn 15% less than the industry median. She recommends adjusting salary ranges to improve attraction and retention. What HR activity is she performing?',
      options: [
        { label: 'A', text: 'Internal Equity Analysis' },
        { label: 'B', text: 'Job Ranking' },
        { label: 'C', text: 'Market Rate Analysis' },
        { label: 'D', text: 'Job Classification' }
      ],
      correctAnswer: 'C',
      explanation: 'Market rate analysis compares organizational pay with salaries offered for comparable work in the external labor market.'
    },
    {
      id: 'W8Q9', week: 8, questionNumber: 9,
      question: 'A large bank evaluates jobs by comparing detailed job profiles with standardized grade descriptions. Two jobs with different titles are placed in the same grade because they require similar levels of responsibility and expertise. Which evaluation approach is being used?',
      options: [
        { label: 'A', text: 'Role-to-Role Matching' },
        { label: 'B', text: 'Market Pricing' },
        { label: 'C', text: 'Role-to-Grade Analytical Matching' },
        { label: 'D', text: 'Forced Ranking' }
      ],
      correctAnswer: 'C',
      explanation: 'The job profile is compared with established grade descriptions to determine the appropriate grade.'
    },
    {
      id: 'W8Q10', week: 8, questionNumber: 10,
      question: 'Naina is analyzing compensation survey data. She notices that the title "Business Analyst" is used very differently across companies. Instead of relying on titles, she studies concise descriptions of duties, responsibilities, and reporting relationships before matching jobs. Why is this approach preferable?',
      options: [
        { label: 'A', text: 'Job titles always reflect pay grades.' },
        { label: 'B', text: 'Job descriptions provide a more accurate basis for comparison than titles alone.' },
        { label: 'C', text: 'Market surveys require legal compliance.' },
        { label: 'D', text: 'Equal pay legislation prohibits title comparisons.' }
      ],
      correctAnswer: 'B',
      explanation: 'Comparing actual duties and responsibilities improves the accuracy of job matching across employers.'
    },

    // ---------------- WEEK 9 ----------------
    {
      id: 'W9Q1', week: 9, questionNumber: 1,
      question: 'The board of a large pharmaceutical company was concerned that its CEO was focusing excessively on short-term profits while ignoring long-term innovation and sustainability. To address this, the board linked a substantial portion of the CEO\'s compensation to the company\'s long-term stock performance. Which theory most strongly supports this decision?',
      options: [
        { label: 'A', text: 'Human Capital Theory' },
        { label: 'B', text: 'Agency Theory' },
        { label: 'C', text: 'Equity Theory' },
        { label: 'D', text: 'Reinforcement Theory' }
      ],
      correctAnswer: 'B',
      explanation: 'Linking executive compensation to long-term company performance aligns the CEO\'s interests with those of shareholders.'
    },
    {
      id: 'W9Q2', week: 9, questionNumber: 2,
      question: 'At a multinational company, senior vice presidents compete intensely for promotion to the role of Chief Executive Officer. The compensation difference between the CEO and other executives is extremely large, and management believes this motivates ambitious leaders to perform better. Which theory best explains this reward philosophy?',
      options: [
        { label: 'A', text: 'Efficiency Wage Theory' },
        { label: 'B', text: 'Equity Theory' },
        { label: 'C', text: 'Tournament Theory' },
        { label: 'D', text: 'Human Capital Theory' }
      ],
      correctAnswer: 'C',
      explanation: 'The large compensation difference creates a valuable prize that motivates executives to compete for promotion.'
    },
    {
      id: 'W9Q3', week: 9, questionNumber: 3,
      question: 'Riddhi has recently been appointed Chief Financial Officer of a listed company. Her compensation package includes a fixed salary, annual performance bonus, pension benefits, and stock options that vest after three years. Which component is most directly intended to align her interests with shareholders?',
      options: [
        { label: 'A', text: 'Basic Salary' },
        { label: 'B', text: 'Pension Benefits' },
        { label: 'C', text: 'Stock Options' },
        { label: 'D', text: 'Allowances' }
      ],
      correctAnswer: 'C',
      explanation: 'Stock options give executives a financial interest in the company\'s future share value.'
    },
    {
      id: 'W9Q4', week: 9, questionNumber: 4,
      question: 'Aniket is the CEO of a financial services company. His annual bonus depends entirely on short-term profit targets. To maximize his reward, he approves several high-risk investments that generate immediate profits but later expose the company to substantial losses. Which concern is most clearly illustrated?',
      options: [
        { label: 'A', text: 'Wage Compression' },
        { label: 'B', text: 'Procedural Justice' },
        { label: 'C', text: 'Moral Hazard' },
        { label: 'D', text: 'Broad-Banding' }
      ],
      correctAnswer: 'C',
      explanation: 'The reward structure encourages risk-taking for personal gain while the organization bears the potential long-term losses.'
    },
    {
      id: 'W9Q5', week: 9, questionNumber: 5,
      question: 'Naina works as a sales representative for a medical equipment company. She receives no fixed salary and is paid entirely as a percentage of the value of products she sells. Which reward arrangement is being used?',
      options: [
        { label: 'A', text: 'Salary Plus Bonus' },
        { label: 'B', text: 'Salary Plus Commission' },
        { label: 'C', text: 'Commission-Only Plan' },
        { label: 'D', text: 'Profit Sharing Plan' }
      ],
      correctAnswer: 'C',
      explanation: 'Her entire earnings depend on sales commissions, with no fixed salary.'
    },
    {
      id: 'W9Q6', week: 9, questionNumber: 6,
      question: 'Arka manages a customer service team. Initially, employees were rewarded only for the number of calls handled per day. While productivity increased, customer complaints also increased because employees rushed through interactions. What lesson does this scenario most strongly illustrate?',
      options: [
        { label: 'A', text: 'Individual incentives always improve service quality.' },
        { label: 'B', text: 'Reward systems can unintentionally encourage undesirable behaviours.' },
        { label: 'C', text: 'Customer service staff should not receive incentives.' },
        { label: 'D', text: 'Salary-based rewards eliminate performance problems.' }
      ],
      correctAnswer: 'B',
      explanation: 'Rewarding call volume alone encouraged employees to sacrifice service quality.'
    },
    {
      id: 'W9Q7', week: 9, questionNumber: 7,
      question: 'Priyanka is a data scientist who values challenging assignments, intellectual freedom, opportunities to learn new technologies, and the ability to influence important decisions. She is less concerned about overtime payments or manual work incentives. According to Tampoe\'s framework, which characteristic best reflects a key motivator for knowledge workers?',
      options: [
        { label: 'A', text: 'Piece-rate earnings' },
        { label: 'B', text: 'Physical effort rewards' },
        { label: 'C', text: 'Autonomy and personal growth' },
        { label: 'D', text: 'Attendance-based incentives' }
      ],
      correctAnswer: 'C',
      explanation: 'Knowledge workers are motivated by autonomy, intellectually challenging work and opportunities for development.'
    },
    {
      id: 'W9Q8', week: 9, questionNumber: 8,
      question: 'A manufacturing company introduces a Payment-by-Results (PBR) scheme for machine operators. Workers who produce more units receive higher earnings. However, employees begin focusing on quantity rather than quality, leading to increased defects. What is a common drawback of PBR highlighted here?',
      options: [
        { label: 'A', text: 'Reduced productivity' },
        { label: 'B', text: 'Excessive job security' },
        { label: 'C', text: 'Quality deterioration due to output focus' },
        { label: 'D', text: 'Lack of employee motivation' }
      ],
      correctAnswer: 'C',
      explanation: 'Employees may prioritize quantity over product quality when incentives depend heavily on output.'
    },
    {
      id: 'W9Q9', week: 9, questionNumber: 9,
      question: 'Sayan works in a factory where earnings depend largely on production output. During one month, machine breakdowns and raw material shortages significantly reduce production, even though employees work diligently. Why might employees perceive the reward system as unfair?',
      options: [
        { label: 'A', text: 'Employees prefer fixed salaries in all situations.' },
        { label: 'B', text: 'Rewards are influenced by factors beyond employee control.' },
        { label: 'C', text: 'Payment-by-results increases transparency.' },
        { label: 'D', text: 'Production targets were exceeded.' }
      ],
      correctAnswer: 'B',
      explanation: 'Employees may earn less because of equipment or supply problems despite their own efforts.'
    },
    {
      id: 'W9Q10', week: 9, questionNumber: 10,
      question: 'Mainak is redesigning rewards for a team of relationship managers in a bank. He wants employees to increase sales while maintaining high customer satisfaction and long-term client relationships. Which reward design would best achieve this objective?',
      options: [
        { label: 'A', text: 'Commission based solely on sales volume' },
        { label: 'B', text: 'Fixed salary only' },
        { label: 'C', text: 'Salary plus bonuses linked to both sales and customer satisfaction measures' },
        { label: 'D', text: 'Seniority-based increments only' }
      ],
      correctAnswer: 'C',
      explanation: 'Combining measures discourages employees from chasing short-term sales at the expense of customer relationships.'
    },

    // ---------------- WEEK 10 ----------------
    {
      id: 'W10Q1', week: 10, questionNumber: 1,
      question: 'Aniket recently joined a central government organization. During an orientation session, he learned that the minimum basic pay recommended under the 7th Central Pay Commission was determined using a scientific formula intended to ensure a reasonable standard of living. What was the minimum pay recommended?',
      options: [
        { label: 'A', text: '15,000' },
        { label: 'B', text: '18,000' },
        { label: 'C', text: '21,000' },
        { label: 'D', text: '25,000' }
      ],
      correctAnswer: 'B',
      explanation: 'The 7th CPC recommended minimum pay of 18,000 per month using the Aykroyd formula.'
    },
    {
      id: 'W10Q2', week: 10, questionNumber: 2,
      question: 'Riddhi\'s basic pay under the 6th Pay Commission was 25,000. While explaining the transition to the 7th Pay Commission, the HR department informed employees that existing pay would be multiplied by a uniform factor before being placed in the new pay matrix. Which concept is being referred to?',
      options: [
        { label: 'A', text: 'Dearness Allowance' },
        { label: 'B', text: 'Risk and Hardship Index' },
        { label: 'C', text: 'Fitment Factor' },
        { label: 'D', text: 'Pension Multiplier' }
      ],
      correctAnswer: 'C',
      explanation: 'The fitment factor is used to determine revised pay when transitioning to the new pay structure.'
    },
    {
      id: 'W10Q3', week: 10, questionNumber: 3,
      question: 'Sayan is comparing two retirement plans. Under Plan A, his pension amount is predetermined based on years of service and final salary. Under Plan B, his retirement income depends on contributions and investment performance. Which type of pension plan is Plan A?',
      options: [
        { label: 'A', text: 'Defined Contribution Scheme' },
        { label: 'B', text: 'Hybrid Pension Scheme' },
        { label: 'C', text: 'Defined Benefit Scheme' },
        { label: 'D', text: 'Market-Linked Pension Scheme' }
      ],
      correctAnswer: 'C',
      explanation: 'A defined benefit scheme determines the pension using a predetermined formula, often based on final salary and service duration.'
    },
    {
      id: 'W10Q4', week: 10, questionNumber: 4,
      question: 'Priyanka joined central government service after 2004 and contributes regularly to the National Pension System (NPS). During a workshop, she learns that the government\'s contribution to employee NPS accounts was increased to strengthen retirement security. From what percentage was the employer contribution increased to 14%?',
      options: [
        { label: 'A', text: '8%' },
        { label: 'B', text: '10%' },
        { label: 'C', text: '12%' },
        { label: 'D', text: '15%' }
      ],
      correctAnswer: 'B',
      explanation: 'The question asks for the previous contribution rate. The notes describe the earlier 10% contribution rate.'
    },
    {
      id: 'W10Q5', week: 10, questionNumber: 5,
      question: 'During a discussion on compensation policy, Arka learns that annual increments under the 7th Pay Commission continue to follow the same percentage that existed previously. What is the approved annual increment rate?',
      options: [
        { label: 'A', text: '2%' },
        { label: 'B', text: '2.5%' },
        { label: 'C', text: '3%' },
        { label: 'D', text: '4%' }
      ],
      correctAnswer: 'C',
      explanation: 'The 7th CPC adopted a 3% annual increment rate.'
    },
    {
      id: 'W10Q6', week: 10, questionNumber: 6,
      question: 'Naina works in the private sector and wants a government-backed pension scheme that guarantees a fixed monthly pension after retirement. She is willing to contribute regularly during her working years. Under the Atal Pension Yojana (APY), what is the maximum assured monthly pension available?',
      options: [
        { label: 'A', text: '2,000' },
        { label: 'B', text: '3,000' },
        { label: 'C', text: '4,000' },
        { label: 'D', text: '5,000' }
      ],
      correctAnswer: 'D',
      explanation: 'The APY pension options range from 1,000 to 5,000 per month, making 5,000 the maximum in the scheme described in the notes.'
    },
    {
      id: 'W10Q7', week: 10, questionNumber: 7,
      question: 'A team of employees posted in highly dangerous and difficult working conditions receives special allowances. The HR department explains that these allowances are determined using a framework introduced by the 7th Pay Commission. Which framework governs such allowances?',
      options: [
        { label: 'A', text: 'Pay Rationalization Matrix' },
        { label: 'B', text: 'Compensation Adjustment Grid' },
        { label: 'C', text: 'Risk and Hardship Matrix' },
        { label: 'D', text: 'Occupational Exposure Index' }
      ],
      correctAnswer: 'C',
      explanation: 'The 7th CPC introduced a Risk and Hardship Matrix for relevant allowances.'
    },
    {
      id: 'W10Q8', week: 10, questionNumber: 8,
      question: 'Megha wants to invest in the National Pension System but is curious about which authority supervises pension fund managers, subscriber interests, and regulatory compliance. Which institution regulates NPS?',
      options: [
        { label: 'A', text: 'RBI' },
        { label: 'B', text: 'SEBI' },
        { label: 'C', text: 'IRDAI' },
        { label: 'D', text: 'PFRDA' }
      ],
      correctAnswer: 'D',
      explanation: 'The Pension Fund Regulatory and Development Authority regulates the pension market in India.'
    },
    {
      id: 'W10Q9', week: 10, questionNumber: 9,
      question: 'After opening an NPS Tier I account, Mainak realizes he may occasionally need access to funds for short-term financial requirements. His financial advisor suggests opening another NPS account that allows flexible deposits and withdrawals. Which account should he open?',
      options: [
        { label: 'A', text: 'EPF Account' },
        { label: 'B', text: 'PRAN Plus Account' },
        { label: 'C', text: 'Tier II Account' },
        { label: 'D', text: 'CGEGIS Account' }
      ],
      correctAnswer: 'C',
      explanation: 'The Tier II account provides flexible withdrawals, unlike the retirement-focused Tier I account.'
    },
    {
      id: 'W10Q10', week: 10, questionNumber: 10,
      question: 'Riddhi and Sreejita are discussing retirement plans. Riddhi says, "My pension amount is guaranteed regardless of market performance." Sreejita replies, "My retirement income will depend on how much I contribute and how the investments perform over time." Which statement correctly describes the difference?',
      options: [
        { label: 'A', text: 'Defined benefit plans guarantee pension; defined contribution plans depend on accumulated contributions and investment returns.' },
        { label: 'B', text: 'Defined contribution plans guarantee pension; defined benefit plans depend on market performance.' },
        { label: 'C', text: 'Both plans provide identical retirement benefits.' },
        { label: 'D', text: 'Only government employees can join defined contribution plans.' }
      ],
      correctAnswer: 'A',
      explanation: 'Defined benefit plans promise a benefit determined by a formula; defined contribution benefits depend on the accumulated fund and its returns.'
    },

    // ---------------- WEEK 11 ----------------
    {
      id: 'W11Q1', week: 11, questionNumber: 1,
      question: 'A rapidly expanding technology company wanted to redesign its reward system. Instead of focusing only on salary increases, HR included health benefits, career development opportunities, flexible work arrangements, and employee recognition programs. Which reward philosophy is the company adopting?',
      options: [
        { label: 'A', text: 'Market Pricing Approach' },
        { label: 'B', text: 'Job Evaluation Approach' },
        { label: 'C', text: 'Total Rewards Approach' },
        { label: 'D', text: 'Broad-Banding Approach' }
      ],
      correctAnswer: 'C',
      explanation: 'Total rewards includes financial compensation, benefits, work-life arrangements, recognition and career development.'
    },
    {
      id: 'W11Q2', week: 11, questionNumber: 2,
      question: 'After introducing a new reward system, Arka suggested that the organization should not review it for at least ten years because frequent changes create unnecessary work. However, Priyanka disagreed. Why is Priyanka\'s view more appropriate?',
      options: [
        { label: 'A', text: 'Reward systems should only change when employees demand it.' },
        { label: 'B', text: 'Reward systems must evolve with changing business strategies and workforce needs.' },
        { label: 'C', text: 'Reward systems are legally required to change every year.' },
        { label: 'D', text: 'External consultants require periodic projects.' }
      ],
      correctAnswer: 'B',
      explanation: 'The notes stress continuous review and changes in response to evolving business and HR strategies.'
    },
    {
      id: 'W11Q3', week: 11, questionNumber: 3,
      question: 'A newly appointed HR Director at Zenith Ltd. was asked to design a reward system from scratch. Before discussing pay structures or benefits, she spent time defining what the organization wanted the reward system to achieve. What development stage is she focusing on?',
      options: [
        { label: 'A', text: 'Pilot Testing' },
        { label: 'B', text: 'Market Benchmarking' },
        { label: 'C', text: 'Setting Reward Objectives' },
        { label: 'D', text: 'Job Evaluation' }
      ],
      correctAnswer: 'C',
      explanation: 'Defining objectives is the starting point of the reward-system development process.'
    },
    {
      id: 'W11Q4', week: 11, questionNumber: 4,
      question: 'Riddhi is evaluating her organization\'s current reward practices. She compares them with leading organizations in the industry and identifies several areas where the company is lagging behind. Which approach is she applying?',
      options: [
        { label: 'A', text: 'Forced Distribution' },
        { label: 'B', text: 'Evidence-Based Reward Development' },
        { label: 'C', text: 'Job Ranking' },
        { label: 'D', text: 'Broad-Banding' }
      ],
      correctAnswer: 'B',
      explanation: 'This approach examines current strengths and weaknesses and benchmarks reward practices against good practices.'
    },
    {
      id: 'W11Q5', week: 11, questionNumber: 5,
      question: 'Before implementing a redesigned reward system, Mainak conducts a small-scale trial in one department, communicates the purpose of the changes, and gathers employee feedback. Which implementation activity is most evident in this scenario?',
      options: [
        { label: 'A', text: 'Workforce Downsizing' },
        { label: 'B', text: 'Pilot Testing' },
        { label: 'C', text: 'Job Rotation' },
        { label: 'D', text: 'Pay Compression' }
      ],
      correctAnswer: 'B',
      explanation: 'Pilot testing lets an organization evaluate the system and identify problems before wider implementation.'
    },
    {
      id: 'W11Q6', week: 11, questionNumber: 6,
      question: 'Following a compensation restructuring exercise, Naina\'s salary remains significantly above the maximum pay level assigned to her job grade. Management decides to freeze future salary increases until the pay range catches up. Which practice is being applied?',
      options: [
        { label: 'A', text: 'Green-Circling' },
        { label: 'B', text: 'Broad-Banding' },
        { label: 'C', text: 'Red-Circling' },
        { label: 'D', text: 'Market Pricing' }
      ],
      correctAnswer: 'C',
      explanation: 'Red-circling refers to identifying and dealing with employees whose existing pay is above the maximum for their new grade.'
    },
    {
      id: 'W11Q7', week: 11, questionNumber: 7,
      question: 'A consulting firm hired Sreejita, a cybersecurity specialist, during a severe talent shortage. To attract her, the company offered an additional market supplement. Two years later, the labor market stabilized and many qualified professionals became available. According to sound reward management principles, what should the organization consider?',
      options: [
        { label: 'A', text: 'Continue the supplement permanently.' },
        { label: 'B', text: 'Increase the supplement annually.' },
        { label: 'C', text: 'Review and potentially remove the supplement if no longer justified.' },
        { label: 'D', text: 'Convert the supplement into pension benefits.' }
      ],
      correctAnswer: 'C',
      explanation: 'The notes state that market supplements should be reviewed regularly and discontinued when no longer justified.'
    },
    {
      id: 'W11Q8', week: 11, questionNumber: 8,
      question: 'An organization provides different reward packages to different groups of employees. Sales staff receive commission plans, software developers receive innovation bonuses, and senior managers receive long-term incentive plans. Which reward management principle is being applied?',
      options: [
        { label: 'A', text: 'Internal Benchmarking' },
        { label: 'B', text: 'Segmentation' },
        { label: 'C', text: 'Equal Pay' },
        { label: 'D', text: 'Pay Compression' }
      ],
      correctAnswer: 'B',
      explanation: 'Segmentation means varying reward packages to reflect different job demands, contributions and employee needs.'
    },
    {
      id: 'W11Q9', week: 11, questionNumber: 9,
      question: 'Arka earns ₹72,000 per month, while the midpoint salary for his grade is ₹60,000. HR calculates his compa-ratio to assess his position relative to the pay structure. What does a compa-ratio above 100% indicate?',
      options: [
        { label: 'A', text: 'The employee is paid below policy rate.' },
        { label: 'B', text: 'The employee is paid exactly at the midpoint.' },
        { label: 'C', text: 'The employee is paid above the policy midpoint.' },
        { label: 'D', text: 'The employee has reached retirement eligibility.' }
      ],
      correctAnswer: 'C',
      explanation: 'Compa-ratio equals actual pay divided by the midpoint or reference pay, multiplied by 100. A value above 100% means pay is above the policy target.'
    },
    {
      id: 'W11Q10', week: 11, questionNumber: 10,
      question: 'While reviewing compensation strategy, Priyanka states, "Our organization deliberately pays around 10% above industry average because we want to attract and retain top talent." Which reward concept is Priyanka describing?',
      options: [
        { label: 'A', text: 'Job Evaluation' },
        { label: 'B', text: 'Compa-Ratio' },
        { label: 'C', text: 'Pay Posture' },
        { label: 'D', text: 'Red-Circling' }
      ],
      correctAnswer: 'C',
      explanation: 'Pay posture, also called pay stance, describes an organization\'s position relative to the market—for example, above-average, average or below-average pay.'
    },

    // ---------------- WEEK 12 ----------------
    {
      id: 'W12Q1', week: 12, questionNumber: 1,
      question: 'Riddhi is the HR Director of a leading consulting firm. During campus recruitment, she discovers that her cousin, Arka, has applied for a position. Although Arka performs poorly in the interview, several family members expect her to ensure his selection. What is the primary ethical issue Riddhi is facing?',
      options: [
        { label: 'A', text: 'Job Evaluation Error' },
        { label: 'B', text: 'Market Rate Analysis' },
        { label: 'C', text: 'Nepotism and Conflict of Interest' },
        { label: 'D', text: 'Performance Benchmarking' }
      ],
      correctAnswer: 'C',
      explanation: 'Favoring a relative would compromise an impartial, merit-based recruitment process.'
    },
    {
      id: 'W12Q2', week: 12, questionNumber: 2,
      question: 'A state university cannot significantly increase the salaries of its contractual faculty due to budget constraints. Instead, Dean Priyanka introduces research grants, committee leadership opportunities, public recognition, and participation in important academic decisions. What is the primary purpose of these initiatives?',
      options: [
        { label: 'A', text: 'Reduce teaching workload entirely' },
        { label: 'B', text: 'Replace performance appraisal systems' },
        { label: 'C', text: 'Increase engagement through non-financial rewards' },
        { label: 'D', text: 'Eliminate compensation concerns permanently' }
      ],
      correctAnswer: 'C',
      explanation: 'Recognition, leadership opportunities and participation can improve engagement even when salary increases are limited.'
    },
    {
      id: 'W12Q3', week: 12, questionNumber: 3,
      question: 'During annual performance reviews, Mainak notices that one employee failed to achieve targets because she spent significant time helping struggling colleagues and maintaining ethical standards. Another employee met targets by misleading customers. According to Kantian ethics, which employee\'s behaviour would be viewed more favourably?',
      options: [
        { label: 'A', text: 'The employee who achieved targets regardless of methods.' },
        { label: 'B', text: 'The employee whose actions were guided by ethical intentions and duty.' },
        { label: 'C', text: 'Both employees equally.' },
        { label: 'D', text: 'Neither employee.' }
      ],
      correctAnswer: 'B',
      explanation: 'Kantian ethics emphasizes moral duty and intentions rather than judging actions solely by their outcomes.'
    },
    {
      id: 'W12Q4', week: 12, questionNumber: 4,
      question: 'Sayan rates Naina highly because she is confident, friendly, and articulate. As a result, he assumes she must also be highly competent in every aspect of her job, despite limited evidence. Why is this appraisal approach ethically problematic?',
      options: [
        { label: 'A', text: 'It is too objective.' },
        { label: 'B', text: 'It relies on subjective judgments that may introduce bias.' },
        { label: 'C', text: 'It uses quantitative indicators.' },
        { label: 'D', text: 'It focuses on results.' }
      ],
      correctAnswer: 'B',
      explanation: 'Personality impressions can improperly influence ratings of unrelated job-performance dimensions.'
    },
    {
      id: 'W12Q5', week: 12, questionNumber: 5,
      question: 'A hospital administrator is evaluating nurses. Some nurses spend considerable time comforting patients and supporting families, while others focus primarily on completing measurable tasks. The administrator struggles to compare overall performance fairly. According to Velasquez, why do such appraisal challenges arise?',
      options: [
        { label: 'A', text: 'Human performance is difficult to measure objectively in all dimensions.' },
        { label: 'B', text: 'Performance appraisal systems are unnecessary.' },
        { label: 'C', text: 'Employees should not be evaluated.' },
        { label: 'D', text: 'Only quantitative outcomes matter.' }
      ],
      correctAnswer: 'A',
      explanation: 'Quantitative measures may capture completed tasks but fail to fully reflect qualitative contributions such as patient support.'
    },
    {
      id: 'W12Q6', week: 12, questionNumber: 6,
      question: 'An organization evaluates sales staff using objective sales figures but evaluates research scientists using highly subjective managerial judgments. Employees begin comparing ratings across departments and questioning promotion decisions. What ethical concern is most likely to emerge?',
      options: [
        { label: 'A', text: 'Higher profitability' },
        { label: 'B', text: 'Unfair comparisons across employees' },
        { label: 'C', text: 'Increased innovation' },
        { label: 'D', text: 'Reduced turnover' }
      ],
      correctAnswer: 'B',
      explanation: 'The lecture identifies using different appraisal systems within the same organization—objective for one group and subjective for another—as a fairness concern.'
    },
    {
      id: 'W12Q7', week: 12, questionNumber: 7,
      question: 'After receiving a poor appraisal rating, Megha requests an explanation and an opportunity to challenge factual inaccuracies. However, management refuses to discuss the decision and provides no appeal mechanism. Which ethical safeguard is missing?',
      options: [
        { label: 'A', text: 'Job Evaluation' },
        { label: 'B', text: 'Grievance and Review Mechanism' },
        { label: 'C', text: 'Market Benchmarking' },
        { label: 'D', text: 'Broad-Banding' }
      ],
      correctAnswer: 'B',
      explanation: 'Employees should have a fair process for raising concerns, correcting factual errors and requesting a review.'
    },
    {
      id: 'W12Q8', week: 12, questionNumber: 8,
      question: 'Before implementing a new performance management system, Priyanka forms a committee consisting of managers, employees, and union representatives to discuss evaluation criteria and feedback mechanisms. Which principle is most strongly reflected?',
      options: [
        { label: 'A', text: 'Centralized Authority' },
        { label: 'B', text: 'Confidential Appraisal' },
        { label: 'C', text: 'Stakeholder Involvement' },
        { label: 'D', text: 'Forced Distribution' }
      ],
      correctAnswer: 'C',
      explanation: 'The organization involves several affected groups in designing the system.'
    },
    {
      id: 'W12Q9', week: 12, questionNumber: 9,
      question: 'A university is designing a performance appraisal system for faculty members. Which measure would be least appropriate as a primary performance indicator?',
      options: [
        { label: 'A', text: 'Research publications' },
        { label: 'B', text: 'Student feedback' },
        { label: 'C', text: 'Teaching effectiveness measures' },
        { label: 'D', text: 'Number of personal complaints made by colleagues' }
      ],
      correctAnswer: 'D',
      explanation: 'Personal complaints can be subjective and influenced by interpersonal conflicts, making them a poor primary measure of performance.'
    },
    {
      id: 'W12Q10', week: 12, questionNumber: 10,
      question: 'At a customer service company, managers evaluate employees exclusively on the number of calls handled per day. Employees begin ending calls quickly, resulting in lower customer satisfaction and weaker relationships. What ethical concern does this situation highlight?',
      options: [
        { label: 'A', text: 'Quantitative metrics are always superior.' },
        { label: 'B', text: 'Sole reliance on quantitative measures can ignore important qualitative outcomes.' },
        { label: 'C', text: 'Customer satisfaction is irrelevant.' },
        { label: 'D', text: 'Employees should not be rewarded.' }
      ],
      correctAnswer: 'B',
      explanation: 'Evaluating call volume alone ignores the quality of customer interactions and can encourage undesirable behaviour.'
    }
  ];

  /* ============================================================
     2. STATE & CONSTANTS
     ============================================================ */
  const STORAGE_SETTINGS = 'quizlab_settings_v1';
  const STORAGE_PROGRESS = 'quizlab_progress_v1';
  const STORAGE_ACTIVE = 'quizlab_active_attempt_v1';

  const defaultSettings = {
    theme: 'dark',
    feedback: 'instant',
    maxMarks: '10',
    order: 'original',
    shuffleOptions: false,
    showExplanation: true,
    allowChange: true,
    timer: false
  };

  let settings = { ...defaultSettings };
  let progress = {
    history: [], // array of attempt objects { id, date, weeks, score, maxMarks, percentage, correct, incorrect, unanswered, timeTaken, questions: [...] }
    weekStats: {} // { 1: { bestScore, attempts } }
  };
  let activeAttempt = null;

  let currentQuiz = null; // { questions: [], currentIndex, answers: {}, markedForReview: Set, config: {} }
  let timerInterval = null;
  let timeLeft = 0;
  let timeElapsed = 0;

  /* ============================================================
     3. DOM ELEMENTS
     ============================================================ */
  const el = {
    // Views
    dashboardView: document.getElementById('dashboardView'),
    quizView: document.getElementById('quizView'),
    resultsView: document.getElementById('resultsView'),

    // Header
    dashboardBtn: document.getElementById('dashboardBtn'),
    themeToggle: document.getElementById('themeToggle'),
    settingsBtn: document.getElementById('settingsBtn'),

    // Dashboard
    dashTotalQuestions: document.getElementById('dashTotalQuestions'),
    footerQuestionCount: document.getElementById('footerQuestionCount'),
    practiceAllBtn: document.getElementById('practiceAllBtn'),
    randomQuizBtn: document.getElementById('randomQuizBtn'),
    customQuizBtn: document.getElementById('customQuizBtn'),
    statTotalQuestions: document.getElementById('statTotalQuestions'),
    statAttempts: document.getElementById('statAttempts'),
    statAvg: document.getElementById('statAvg'),
    statBest: document.getElementById('statBest'),
    overallProgressText: document.getElementById('overallProgressText'),
    overallProgressPill: document.getElementById('overallProgressPill'),
    overallProgressFill: document.getElementById('overallProgressFill'),
    continueSection: document.getElementById('continueSection'),
    continueTitle: document.getElementById('continueTitle'),
    continueMeta: document.getElementById('continueMeta'),
    continueBtn: document.getElementById('continueBtn'),
    discardAttemptBtn: document.getElementById('discardAttemptBtn'),
    weeksGrid: document.getElementById('weeksGrid'),

    // Quiz
    quizTitle: document.getElementById('quizTitle'),
    quizSubtitle: document.getElementById('quizSubtitle'),
    quizTimer: document.getElementById('quizTimer'),
    exitQuizBtn: document.getElementById('exitQuizBtn'),
    fullscreenBtn: document.getElementById('fullscreenBtn'),
    paletteToggleBtn: document.getElementById('paletteToggleBtn'),
    quizProgressFill: document.getElementById('quizProgressFill'),
    quizCounter: document.getElementById('quizCounter'),
    quizAnsweredCount: document.getElementById('quizAnsweredCount'),
    palettePanel: document.getElementById('palettePanel'),
    paletteCloseBtn: document.getElementById('paletteCloseBtn'),
    paletteGrid: document.getElementById('paletteGrid'),
    submitQuizBtnSide: document.getElementById('submitQuizBtnSide'),
    questionBadge: document.getElementById('questionBadge'),
    questionWeekTag: document.getElementById('questionWeekTag'),
    markReviewBtn: document.getElementById('markReviewBtn'),
    questionText: document.getElementById('questionText'),
    optionsList: document.getElementById('optionsList'),
    feedbackBox: document.getElementById('feedbackBox'),
    feedbackText: document.getElementById('feedbackText'),
    explanationText: document.getElementById('explanationText'),
    revealBtn: document.getElementById('revealBtn'),
    clearAnswerBtn: document.getElementById('clearAnswerBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitQuizBtn: document.getElementById('submitQuizBtn'),

    // Results
    scoreCircle: document.getElementById('scoreCircle'),
    resultsPercent: document.getElementById('resultsPercent'),
    resultsTitle: document.getElementById('resultsTitle'),
    resultsSubtitle: document.getElementById('resultsSubtitle'),
    resultsScore: document.getElementById('resultsScore'),
    resultsMaxMarks: document.getElementById('resultsMaxMarks'),
    resultsCorrect: document.getElementById('resultsCorrect'),
    resultsIncorrect: document.getElementById('resultsIncorrect'),
    resultsUnanswered: document.getElementById('resultsUnanswered'),
    resultsTime: document.getElementById('resultsTime'),
    weekBreakdownPanel: document.getElementById('weekBreakdownPanel'),
    weekBreakdown: document.getElementById('weekBreakdown'),
    reviewList: document.getElementById('reviewList'),
    retryQuizBtn: document.getElementById('retryQuizBtn'),
    retryIncorrectBtn: document.getElementById('retryIncorrectBtn'),
    retryUnansweredBtn: document.getElementById('retryUnansweredBtn'),
    exportCsvBtn: document.getElementById('exportCsvBtn'),
    chooseAnotherBtn: document.getElementById('chooseAnotherBtn'),

    // Modals
    setupModal: document.getElementById('setupModal'),
    setupTitle: document.getElementById('setupTitle'),
    setupWeekList: document.getElementById('setupWeekList'),
    setupPoolHint: document.getElementById('setupPoolHint'),
    setupCount: document.getElementById('setupCount'),
    setupOrder: document.getElementById('setupOrder'),
    setupShuffleOptions: document.getElementById('setupShuffleOptions'),
    setupFeedback: document.getElementById('setupFeedback'),
    setupMaxMarks: document.getElementById('setupMaxMarks'),
    setupCustomMarks: document.getElementById('setupCustomMarks'),
    setupTimer: document.getElementById('setupTimer'),
    setupTimerMinutesWrap: document.getElementById('setupTimerMinutesWrap'),
    setupTimerMinutes: document.getElementById('setupTimerMinutes'),
    setupNegative: document.getElementById('setupNegative'),
    setupPenaltyWrap: document.getElementById('setupPenaltyWrap'),
    setupPenalty: document.getElementById('setupPenalty'),
    setupAllowChange: document.getElementById('setupAllowChange'),
    setupSelectAll: document.getElementById('setupSelectAll'),
    setupClearAll: document.getElementById('setupClearAll'),
    setupCancelBtn: document.getElementById('setupCancelBtn'),
    setupStartBtn: document.getElementById('setupStartBtn'),

    settingsModal: document.getElementById('settingsModal'),
    settingsTheme: document.getElementById('settingsTheme'),
    settingsFeedback: document.getElementById('settingsFeedback'),
    settingsMaxMarks: document.getElementById('settingsMaxMarks'),
    settingsOrder: document.getElementById('settingsOrder'),
    settingsShuffleOptions: document.getElementById('settingsShuffleOptions'),
    settingsShowExplanation: document.getElementById('settingsShowExplanation'),
    settingsAllowChange: document.getElementById('settingsAllowChange'),
    settingsTimer: document.getElementById('settingsTimer'),
    resetProgressBtn: document.getElementById('resetProgressBtn'),
    restoreDefaultsBtn: document.getElementById('restoreDefaultsBtn'),
    settingsDoneBtn: document.getElementById('settingsDoneBtn'),

    confirmModal: document.getElementById('confirmModal'),
    confirmTitle: document.getElementById('confirmTitle'),
    confirmMessage: document.getElementById('confirmMessage'),
    confirmCancelBtn: document.getElementById('confirmCancelBtn'),
    confirmOkBtn: document.getElementById('confirmOkBtn'),

    toast: document.getElementById('toast')
  };

  /* ============================================================
     4. UTILITIES
     ============================================================ */
  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function showToast(msg, type = '') {
    el.toast.textContent = msg;
    el.toast.className = `toast ${type ? 'is-' + type : ''}`;
    el.toast.hidden = false;
    requestAnimationFrame(() => el.toast.classList.add('is-visible'));
    clearTimeout(el.toast._timeout);
    el.toast._timeout = setTimeout(() => {
      el.toast.classList.remove('is-visible');
      setTimeout(() => { el.toast.hidden = true; }, 300);
    }, 3000);
  }

  function openModal(modal) {
    modal.hidden = false;
  }

  function closeModal(modal) {
    modal.hidden = true;
  }

  let confirmCallback = null;
  function showConfirm(title, msg, callback) {
    el.confirmTitle.textContent = title;
    el.confirmMessage.textContent = msg;
    confirmCallback = callback;
    openModal(el.confirmModal);
  }

  el.confirmOkBtn.addEventListener('click', () => {
    closeModal(el.confirmModal);
    if (confirmCallback) confirmCallback();
  });
  el.confirmCancelBtn.addEventListener('click', () => closeModal(el.confirmModal));
  $$('[data-close="confirmModal"]').forEach(b => b.addEventListener('click', () => closeModal(el.confirmModal)));

  /* ============================================================
     5. PERSISTENCE
     ============================================================ */
  function loadData() {
    try {
      const s = localStorage.getItem(STORAGE_SETTINGS);
      if (s) settings = { ...defaultSettings, ...JSON.parse(s) };

      const p = localStorage.getItem(STORAGE_PROGRESS);
      if (p) progress = JSON.parse(p);

      const a = localStorage.getItem(STORAGE_ACTIVE);
      if (a) {
        const parsed = JSON.parse(a);
        if (parsed && parsed.questions && parsed.config) {
          activeAttempt = parsed;
          activeAttempt.markedForReview = new Set(activeAttempt.markedForReview || []);
        }
      }
    } catch (e) {
      console.warn('Failed to load localStorage data', e);
    }
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(settings));
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
  }

  function saveActiveAttempt() {
    if (activeAttempt) {
      const toSave = {
        ...activeAttempt,
        markedForReview: Array.from(activeAttempt.markedForReview)
      };
      localStorage.setItem(STORAGE_ACTIVE, JSON.stringify(toSave));
    } else {
      localStorage.removeItem(STORAGE_ACTIVE);
    }
  }

  /* ============================================================
     6. THEME & SETTINGS
     ============================================================ */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = $('#themeIcon');
    if (icon) {
      icon.innerHTML = theme === 'dark'
        ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
        : '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    }
  }

  el.themeToggle.addEventListener('click', () => {
    settings.theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(settings.theme);
    saveSettings();
  });

  function openSettings() {
    el.settingsTheme.value = settings.theme;
    el.settingsFeedback.value = settings.feedback;
    el.settingsMaxMarks.value = settings.maxMarks;
    el.settingsOrder.value = settings.order;
    el.settingsShuffleOptions.checked = settings.shuffleOptions;
    el.settingsShowExplanation.checked = settings.showExplanation;
    el.settingsAllowChange.checked = settings.allowChange;
    el.settingsTimer.checked = settings.timer;
    openModal(el.settingsModal);
  }

  el.settingsBtn.addEventListener('click', openSettings);
  $$('[data-close="settingsModal"]').forEach(b => b.addEventListener('click', () => closeModal(el.settingsModal)));

  el.settingsDoneBtn.addEventListener('click', () => {
    settings.theme = el.settingsTheme.value;
    settings.feedback = el.settingsFeedback.value;
    settings.maxMarks = el.settingsMaxMarks.value;
    settings.order = el.settingsOrder.value;
    settings.shuffleOptions = el.settingsShuffleOptions.checked;
    settings.showExplanation = el.settingsShowExplanation.checked;
    settings.allowChange = el.settingsAllowChange.checked;
    settings.timer = el.settingsTimer.checked;
    applyTheme(settings.theme);
    saveSettings();
    closeModal(el.settingsModal);
    showToast('Settings saved', 'success');
  });

  el.restoreDefaultsBtn.addEventListener('click', () => {
    settings = { ...defaultSettings };
    applyTheme(settings.theme);
    saveSettings();
    openSettings();
    showToast('Defaults restored', 'success');
  });

  el.resetProgressBtn.addEventListener('click', () => {
    showConfirm('Reset Progress', 'Are you sure? This will permanently delete all your attempts and scores. Settings will be kept.', () => {
      progress = { history: [], weekStats: {} };
      activeAttempt = null;
      saveProgress();
      saveActiveAttempt();
      closeModal(el.settingsModal);
      renderDashboard();
      showToast('All progress reset', 'success');
    });
  });

  /* ============================================================
     7. DASHBOARD
     ============================================================ */
  function switchView(view) {
    [el.dashboardView, el.quizView, el.resultsView].forEach(v => v.hidden = true);
    view.hidden = false;
    window.scrollTo(0, 0);
    el.dashboardBtn.hidden = view === el.dashboardView;
  }

  el.dashboardBtn.addEventListener('click', () => {
    if (activeAttempt && !currentQuiz) {
      // Just show dashboard, active attempt stays in memory
    } else if (currentQuiz) {
      showConfirm('Abandon Quiz?', 'Your current progress will be lost.', () => {
        currentQuiz = null;
        activeAttempt = null;
        saveActiveAttempt();
        renderDashboard();
        switchView(el.dashboardView);
      });
      return;
    }
    renderDashboard();
    switchView(el.dashboardView);
  });

  function renderDashboard() {
    // Stats
    el.dashTotalQuestions.textContent = QUESTION_BANK.length;
    el.footerQuestionCount.textContent = QUESTION_BANK.length;
    el.statTotalQuestions.textContent = QUESTION_BANK.length;

    const attempts = progress.history.length;
    el.statAttempts.textContent = attempts;

    if (attempts > 0) {
      const totalPct = progress.history.reduce((acc, a) => acc + a.percentage, 0);
      el.statAvg.textContent = Math.round(totalPct / attempts) + '%';
      const best = Math.max(...progress.history.map(a => a.percentage));
      el.statBest.textContent = Math.round(best) + '%';
    } else {
      el.statAvg.textContent = '—';
      el.statBest.textContent = '—';
    }

    // Overall progress
    const uniqueQuestionsAnswered = new Set();
    progress.history.forEach(a => a.questions.forEach(q => uniqueQuestionsAnswered.add(q.id)));
    const pctAnswered = Math.round((uniqueQuestionsAnswered.size / QUESTION_BANK.length) * 100) || 0;

    el.overallProgressText.textContent = uniqueQuestionsAnswered.size === 0
      ? 'No questions attempted yet.'
      : `${uniqueQuestionsAnswered.size} of ${QUESTION_BANK.length} unique questions attempted.`;

    el.overallProgressPill.textContent = pctAnswered + '%';
    el.overallProgressFill.style.width = pctAnswered + '%';

    // Continue learning
    if (activeAttempt) {
      el.continueSection.hidden = false;
      const weeksLabel = activeAttempt.config.weeks.length === 12
        ? 'All Weeks'
        : 'Week' + (activeAttempt.config.weeks.length > 1 ? 's ' : ' ') + activeAttempt.config.weeks.join(', ');
      el.continueTitle.textContent = `Resume: ${weeksLabel} Quiz`;
      const answered = Object.keys(activeAttempt.answers).length;
      el.continueMeta.textContent = `${answered} of ${activeAttempt.questions.length} answered`;
    } else {
      el.continueSection.hidden = true;
    }

    // Weeks Grid
    el.weeksGrid.innerHTML = '';
    for (let w = 1; w <= 12; w++) {
      const weekQuestions = QUESTION_BANK.filter(q => q.week === w);
      const weekHistory = progress.history.filter(a => a.weeks.includes(w));
      const bestScore = weekHistory.length > 0
        ? Math.max(...weekHistory.map(a => {
            const wCorrect = a.questions.filter(q => q.week === w && q.userAnswer === q.correctAnswer).length;
            const wTotal = a.questions.filter(q => q.week === w).length;
            return (wCorrect / wTotal) * 100;
          }))
        : null;

      let status = 'Not started';
      let statusClass = '';
      if (activeAttempt && activeAttempt.config.weeks.includes(w)) {
        status = 'In progress';
        statusClass = 'is-progress';
      } else if (weekHistory.length > 0) {
        status = 'Completed';
        statusClass = 'is-done';
      }

      const card = document.createElement('div');
      card.className = 'week-card';
      card.innerHTML = `
        <div class="week-card-top">
          <span class="week-num">Week ${w}</span>
          <span class="week-status ${statusClass}">${status}</span>
        </div>
        <h4 class="week-title">Week ${w} Quiz</h4>
        <p class="week-meta">${weekQuestions.length} questions</p>
        <p class="week-score">${bestScore !== null ? `Best score: <strong>${Math.round(bestScore)}%</strong>` : 'No attempts yet'}</p>
        <button class="btn btn-primary btn-sm" data-week="${w}">Start Quiz</button>
      `;
      card.querySelector('button').addEventListener('click', () => {
        openSetupModal([w]);
      });
      el.weeksGrid.appendChild(card);
    }
  }

  /* ============================================================
     8. SETUP MODAL
     ============================================================ */
  let setupSelectedWeeks = new Set([1]);

  function openSetupModal(weeks = [1], title = 'Configure quiz') {
    setupSelectedWeeks = new Set(weeks);
    el.setupTitle.textContent = title;

    // Render week checkboxes
    el.setupWeekList.innerHTML = '';
    for (let w = 1; w <= 12; w++) {
      const label = document.createElement('label');
      label.className = 'week-check';
      if (setupSelectedWeeks.has(w)) label.classList.add('is-checked');

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.value = w;
      cb.checked = setupSelectedWeeks.has(w);

      cb.addEventListener('change', () => {
        if (cb.checked) {
          setupSelectedWeeks.add(w);
          label.classList.add('is-checked');
        } else {
          setupSelectedWeeks.delete(w);
          label.classList.remove('is-checked');
        }
        updateSetupPoolHint();
      });

      label.appendChild(cb);
      label.appendChild(document.createTextNode(` Week ${w}`));
      el.setupWeekList.appendChild(label);
    }

    // Reset other fields to defaults/settings
    el.setupOrder.value = settings.order;
    el.setupShuffleOptions.checked = settings.shuffleOptions;
    el.setupFeedback.value = settings.feedback;
    el.setupMaxMarks.value = settings.maxMarks;
    el.setupCustomMarks.hidden = settings.maxMarks !== 'custom';
    el.setupTimer.checked = settings.timer;
    el.setupTimerMinutesWrap.hidden = !settings.timer;
    el.setupAllowChange.checked = settings.allowChange;

    updateSetupPoolHint();
    openModal(el.setupModal);
  }

  function updateSetupPoolHint() {
    const poolSize = QUESTION_BANK.filter(q => setupSelectedWeeks.has(q.week)).length;
    el.setupPoolHint.textContent = `${poolSize} questions available in the selected weeks.`;

    // Populate count options
    const counts = [5, 10, 15, 20, 30, 50, poolSize].filter(c => c <= poolSize);
    const uniqueCounts = [...new Set(counts)].sort((a, b) => a - b);
    if (uniqueCounts[uniqueCounts.length - 1] !== poolSize) uniqueCounts.push(poolSize);

    el.setupCount.innerHTML = '';
    uniqueCounts.forEach(c => {
      if (c === 0) return;
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c === poolSize ? `All ${poolSize} questions` : `${c} questions`;
      if (c === poolSize) opt.selected = true;
      el.setupCount.appendChild(opt);
    });
  }

  el.setupSelectAll.addEventListener('click', () => {
    $$('input[type="checkbox"]', el.setupWeekList).forEach(cb => {
      if (!cb.checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change'));
      }
    });
  });

  el.setupClearAll.addEventListener('click', () => {
    $$('input[type="checkbox"]', el.setupWeekList).forEach(cb => {
      if (cb.checked) {
        cb.checked = false;
        cb.dispatchEvent(new Event('change'));
      }
    });
  });

  el.setupMaxMarks.addEventListener('change', () => {
    el.setupCustomMarks.hidden = el.setupMaxMarks.value !== 'custom';
  });

  el.setupTimer.addEventListener('change', () => {
    el.setupTimerMinutesWrap.hidden = !el.setupTimer.checked;
  });

  el.setupNegative.addEventListener('change', () => {
    el.setupPenaltyWrap.hidden = !el.setupNegative.checked;
  });

  $$('[data-close="setupModal"]').forEach(b => b.addEventListener('click', () => closeModal(el.setupModal)));
  el.setupCancelBtn.addEventListener('click', () => closeModal(el.setupModal));

  el.setupStartBtn.addEventListener('click', () => {
    if (setupSelectedWeeks.size === 0) {
      showToast('Please select at least one week.', 'error');
      return;
    }

    const config = {
      weeks: Array.from(setupSelectedWeeks).sort((a, b) => a - b),
      count: parseInt(el.setupCount.value, 10),
      order: el.setupOrder.value,
      shuffleOptions: el.setupShuffleOptions.checked,
      feedback: el.setupFeedback.value,
      maxMarks: el.setupMaxMarks.value === 'custom' ? parseInt(el.setupCustomMarks.value, 10) : (el.setupMaxMarks.value === 'total' ? 'total' : parseInt(el.setupMaxMarks.value, 10)),
      timer: el.setupTimer.checked,
      timerMinutes: parseInt(el.setupTimerMinutes.value, 10),
      negative: el.setupNegative.checked,
      penalty: parseFloat(el.setupPenalty.value),
      allowChange: el.setupAllowChange.checked
    };

    closeModal(el.setupModal);
    startQuiz(config);
  });

  // Quick Start Buttons
  el.practiceAllBtn.addEventListener('click', () => {
    openSetupModal(Array.from({ length: 12 }, (_, i) => i + 1), 'Practice All Weeks');
  });

  el.randomQuizBtn.addEventListener('click', () => {
    const randomWeek = Math.floor(Math.random() * 12) + 1;
    openSetupModal([randomWeek], `Quick Random: Week ${randomWeek}`);
  });

  el.customQuizBtn.addEventListener('click', () => {
    openSetupModal(Array.from({ length: 12 }, (_, i) => i + 1), 'Custom Quiz');
  });

  el.continueBtn.addEventListener('click', () => {
    if (activeAttempt) {
      currentQuiz = activeAttempt;
      activeAttempt = null;
      startQuizRender();
    }
  });

  el.discardAttemptBtn.addEventListener('click', () => {
    showConfirm('Discard Attempt?', 'This will delete your saved progress for the active attempt.', () => {
      activeAttempt = null;
      saveActiveAttempt();
      renderDashboard();
      showToast('Attempt discarded', 'success');
    });
  });

  /* ============================================================
     9. QUIZ GENERATION & LOGIC
     ============================================================ */
  function startQuiz(config) {
    let pool = QUESTION_BANK.filter(q => config.weeks.includes(q.week));

    if (config.order === 'shuffleAcross') {
      pool = shuffle(pool);
    } else if (config.order === 'shuffleWithinWeek') {
      const byWeek = {};
      pool.forEach(q => { if (!byWeek[q.week]) byWeek[q.week] = []; byWeek[q.week].push(q); });
      pool = [];
      Object.keys(byWeek).sort((a, b) => a - b).forEach(w => {
        pool.push(...shuffle(byWeek[w]));
      });
    }

    if (config.count < pool.length) {
      pool = pool.slice(0, config.count);
    }

    // Prepare questions with shuffled options if requested
    const questions = pool.map(q => {
      let opts = q.options.map(o => ({ ...o }));
      let correct = q.correctAnswer;

      if (config.shuffleOptions) {
        opts = shuffle(opts);
        // Re-label A, B, C, D
        const oldCorrectText = q.options.find(o => o.label === q.correctAnswer).text;
        opts = opts.map((o, i) => ({ ...o, label: String.fromCharCode(65 + i) }));
        correct = opts.find(o => o.text === oldCorrectText).label;
      }

      return {
        id: q.id, week: q.week, question: q.question,
        options: opts, correctAnswer: correct, explanation: q.explanation,
        userAnswer: null
      };
    });

    currentQuiz = {
      questions,
      currentIndex: 0,
      answers: {}, // { questionId: label }
      markedForReview: new Set(),
      config,
      startTime: Date.now()
    };

    activeAttempt = currentQuiz;
    saveActiveAttempt();
    startQuizRender();
  }

  function startQuizRender() {
    if (!currentQuiz) return;
    switchView(el.quizView);

    // Setup header
    const weeksLabel = currentQuiz.config.weeks.length === 12
      ? 'All Weeks'
      : 'Week' + (currentQuiz.config.weeks.length > 1 ? 's ' : ' ') + currentQuiz.config.weeks.join(', ');
    el.quizTitle.textContent = `${weeksLabel} Quiz`;
    el.quizSubtitle.textContent = `${currentQuiz.questions.length} questions · ${currentQuiz.config.feedback === 'exam' ? 'Exam Mode' : currentQuiz.config.feedback === 'instant' ? 'Instant Feedback' : 'Reveal on Demand'}`;

    // Timer
    clearInterval(timerInterval);
    if (currentQuiz.config.timer) {
      el.quizTimer.hidden = false;
      timeLeft = currentQuiz.config.timerMinutes * 60;
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          showToast("Time's up! Submitting quiz.", 'error');
          submitQuiz();
        }
      }, 1000);
    } else {
      el.quizTimer.hidden = true;
      timeElapsed = Math.floor((Date.now() - currentQuiz.startTime) / 1000);
    }

    renderQuestion();
    renderPalette();
    updateProgressBar();
  }

  function updateTimerDisplay() {
    el.quizTimer.textContent = formatTime(Math.max(0, timeLeft));
    el.quizTimer.classList.toggle('is-warning', timeLeft <= 60);
  }

  function renderQuestion() {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    const answered = currentQuiz.answers[q.id] !== undefined;
    const selectedLabel = currentQuiz.answers[q.id];

    // Header
    el.questionBadge.textContent = `Q${currentQuiz.currentIndex + 1}`;
    el.questionWeekTag.textContent = `Week ${q.week}`;
    el.questionText.textContent = q.question;

    // Mark for review
    const isMarked = currentQuiz.markedForReview.has(q.id);
    el.markReviewBtn.setAttribute('aria-pressed', isMarked);
    el.markReviewBtn.classList.toggle('is-active', isMarked);

    // Options
    el.optionsList.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.dataset.label = opt.label;

      const isSelected = selectedLabel === opt.label;
      if (isSelected) btn.classList.add('is-selected');

      // Feedback logic
      let reveal = false;
      if (currentQuiz.config.feedback === 'instant' && answered) reveal = true;
      if (currentQuiz.config.feedback === 'ondemand' && q._revealed) reveal = true;

      if (reveal) {
        btn.classList.add('is-disabled');
        if (opt.label === q.correctAnswer) btn.classList.add('is-correct');
        else if (isSelected) btn.classList.add('is-incorrect');
      } else if (!currentQuiz.config.allowChange && answered) {
        btn.classList.add('is-disabled');
      }

      btn.innerHTML = `<span class="option-label">${opt.label}</span><span class="option-text"></span>`;
      btn.querySelector('.option-text').textContent = opt.text;

      if (!btn.classList.contains('is-disabled')) {
        btn.addEventListener('click', () => selectOption(q, opt.label));
      }

      el.optionsList.appendChild(btn);
    });

    // Feedback Box
    let revealFeedback = false;
    if (currentQuiz.config.feedback === 'instant' && answered) revealFeedback = true;
    if (currentQuiz.config.feedback === 'ondemand' && q._revealed) revealFeedback = true;

    if (revealFeedback) {
      el.feedbackBox.hidden = false;
      el.feedbackBox.className = `feedback-box ${selectedLabel === q.correctAnswer ? 'is-correct' : 'is-incorrect'}`;
      el.feedbackText.textContent = selectedLabel === q.correctAnswer
        ? 'Correct!'
        : `Incorrect. The correct answer is ${q.correctAnswer}.`;
      if (settings.showExplanation && q.explanation) {
        el.explanationText.hidden = false;
        el.explanationText.textContent = q.explanation;
      } else {
        el.explanationText.hidden = true;
      }
    } else {
      el.feedbackBox.hidden = true;
    }

    // Reveal Button
    el.revealBtn.hidden = !(currentQuiz.config.feedback === 'ondemand' && answered && !q._revealed);

    // Navigation Buttons
    el.prevBtn.disabled = currentQuiz.currentIndex === 0;
    if (currentQuiz.currentIndex === currentQuiz.questions.length - 1) {
      el.nextBtn.hidden = true;
      el.submitQuizBtn.hidden = false;
      el.submitQuizBtn.style.display = 'inline-flex';
    } else {
      el.nextBtn.hidden = false;
      el.submitQuizBtn.hidden = true;
      el.submitQuizBtn.style.display = 'none';
    }
  }

  function selectOption(q, label) {
    if (!currentQuiz.config.allowChange && currentQuiz.answers[q.id] !== undefined) return;

    currentQuiz.answers[q.id] = label;
    q.userAnswer = label;

    if (currentQuiz.config.feedback === 'instant') {
      renderQuestion();
    } else {
      // Just update selection visually without revealing
      $$('.option', el.optionsList).forEach(btn => {
        btn.classList.toggle('is-selected', btn.dataset.label === label);
      });
    }

    updateProgressBar();
    renderPalette();
    saveActiveAttempt();
  }

  el.clearAnswerBtn.addEventListener('click', () => {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    delete currentQuiz.answers[q.id];
    q.userAnswer = null;
    q._revealed = false;
    renderQuestion();
    updateProgressBar();
    renderPalette();
    saveActiveAttempt();
  });

  el.revealBtn.addEventListener('click', () => {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    q._revealed = true;
    renderQuestion();
  });

  el.markReviewBtn.addEventListener('click', () => {
    const q = currentQuiz.questions[currentQuiz.currentIndex];
    if (currentQuiz.markedForReview.has(q.id)) {
      currentQuiz.markedForReview.delete(q.id);
    } else {
      currentQuiz.markedForReview.add(q.id);
    }
    renderQuestion();
    renderPalette();
    saveActiveAttempt();
  });

  function updateProgressBar() {
    const total = currentQuiz.questions.length;
    const answered = Object.keys(currentQuiz.answers).length;
    const pct = (answered / total) * 100;
    el.quizProgressFill.style.width = pct + '%';
    el.quizCounter.textContent = `Question ${currentQuiz.currentIndex + 1} of ${total}`;
    el.quizAnsweredCount.textContent = `${answered} answered`;
  }

  function renderPalette() {
    el.paletteGrid.innerHTML = '';
    currentQuiz.questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = i + 1;

      if (i === currentQuiz.currentIndex) btn.classList.add('is-current');
      if (currentQuiz.answers[q.id] !== undefined) btn.classList.add('is-answered');
      if (currentQuiz.markedForReview.has(q.id)) btn.classList.add('is-marked');

      btn.addEventListener('click', () => {
        currentQuiz.currentIndex = i;
        renderQuestion();
        renderPalette();
        updateProgressBar();
        if (window.innerWidth <= 1024) el.palettePanel.classList.remove('is-open');
      });

      el.paletteGrid.appendChild(btn);
    });
  }

  el.prevBtn.addEventListener('click', () => {
    if (currentQuiz.currentIndex > 0) {
      currentQuiz.currentIndex--;
      renderQuestion();
      renderPalette();
      updateProgressBar();
    }
  });

  el.nextBtn.addEventListener('click', () => {
    if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
      currentQuiz.currentIndex++;
      renderQuestion();
      renderPalette();
      updateProgressBar();
    }
  });

  el.paletteToggleBtn.addEventListener('click', () => {
    el.palettePanel.classList.toggle('is-open');
    el.paletteToggleBtn.setAttribute('aria-expanded', el.palettePanel.classList.contains('is-open'));
  });

  el.paletteCloseBtn.addEventListener('click', () => {
    el.palettePanel.classList.remove('is-open');
  });

  el.exitQuizBtn.addEventListener('click', () => {
    showConfirm('Exit Quiz?', 'Your progress will be saved and you can resume later.', () => {
      clearInterval(timerInterval);
      activeAttempt = currentQuiz;
      saveActiveAttempt();
      currentQuiz = null;
      renderDashboard();
      switchView(el.dashboardView);
    });
  });

  /* ============================================================
     10. SUBMIT & SCORING
     ============================================================ */
  function submitQuiz() {
    const total = currentQuiz.questions.length;
    const answered = Object.keys(currentQuiz.answers).length;
    if (answered < total) {
      showConfirm('Submit Quiz?', `You have ${total - answered} unanswered questions. Submit anyway?`, () => {
        finalizeSubmit();
      });
    } else {
      finalizeSubmit();
    }
  }

  el.submitQuizBtn.addEventListener('click', submitQuiz);
  el.submitQuizBtnSide.addEventListener('click', submitQuiz);

  function finalizeSubmit() {
    clearInterval(timerInterval);
    const total = currentQuiz.questions.length;
    let correct = 0, incorrect = 0, unanswered = 0;

    currentQuiz.questions.forEach(q => {
      const userAns = currentQuiz.answers[q.id];
      if (!userAns) {
        unanswered++;
      } else if (userAns === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const maxMarks = currentQuiz.config.maxMarks === 'total' ? total : currentQuiz.config.maxMarks;

    let rawScore = correct;
    if (currentQuiz.config.negative) {
      rawScore = Math.max(0, correct - (incorrect * currentQuiz.config.penalty));
    }

    const finalScore = (rawScore / total) * maxMarks;
    const percentage = (finalScore / maxMarks) * 100;

    let timeTakenStr = '';
    if (currentQuiz.config.timer) {
      const timeTaken = (currentQuiz.config.timerMinutes * 60) - timeLeft;
      timeTakenStr = formatTime(timeTaken);
    } else {
      const timeTaken = Math.floor((Date.now() - currentQuiz.startTime) / 1000);
      timeTakenStr = formatTime(timeTaken);
    }

    // Save attempt
    const attempt = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      weeks: currentQuiz.config.weeks,
      questions: currentQuiz.questions.map(q => ({
        id: q.id, week: q.week, question: q.question, options: q.options,
        correctAnswer: q.correctAnswer, explanation: q.explanation,
        userAnswer: currentQuiz.answers[q.id] || null
      })),
      correct, incorrect, unanswered,
      score: finalScore,
      maxMarks: maxMarks,
      percentage: percentage,
      timeTaken: timeTakenStr
    };

    progress.history.unshift(attempt);
    saveProgress();

    activeAttempt = null;
    saveActiveAttempt();
    currentQuiz = null;

    renderResults(attempt);
  }

  /* ============================================================
     11. RESULTS
     ============================================================ */
  function renderResults(attempt) {
    switchView(el.resultsView);

    // Score Circle
    const pct = Math.round(attempt.percentage);
    el.resultsPercent.textContent = pct + '%';
    el.scoreCircle.style.setProperty('--pct', pct);

    el.resultsTitle.textContent = pct >= 80 ? 'Outstanding!' : pct >= 60 ? 'Good Job!' : pct >= 40 ? 'Keep Practising' : 'Needs Improvement';
    el.resultsSubtitle.textContent = `You scored ${attempt.correct} out of ${attempt.questions.length} questions correctly.`;
    el.resultsScore.textContent = attempt.score % 1 === 0 ? attempt.score : attempt.score.toFixed(2);
    el.resultsMaxMarks.textContent = attempt.maxMarks;

    el.resultsCorrect.textContent = attempt.correct;
    el.resultsIncorrect.textContent = attempt.incorrect;
    el.resultsUnanswered.textContent = attempt.unanswered;
    el.resultsTime.textContent = attempt.timeTaken;

    // Breakdown by week
    el.weekBreakdownPanel.hidden = attempt.weeks.length <= 1;
    if (attempt.weeks.length > 1) {
      el.weekBreakdown.innerHTML = '';
      attempt.weeks.forEach(w => {
        const wQs = attempt.questions.filter(q => q.week === w);
        if (wQs.length === 0) return;
        const wCorrect = wQs.filter(q => q.userAnswer === q.correctAnswer).length;
        const wPct = Math.round((wCorrect / wQs.length) * 100);

        const row = document.createElement('div');
        row.className = 'breakdown-row';
        row.innerHTML = `
          <span>Week ${w}</span>
          <div class="breakdown-bar"><div style="width: ${wPct}%"></div></div>
          <span>${wCorrect}/${wQs.length}</span>
        `;
        el.weekBreakdown.appendChild(row);
      });
    }

    // Review List
    renderReview(attempt, 'all');

    // Filter buttons
    $$('.review-filters .chip').forEach(chip => {
      chip.onclick = () => {
        $$('.review-filters .chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        renderReview(attempt, chip.dataset.filter);
      };
    });

    // Action Buttons
    el.retryQuizBtn.onclick = () => {
      openSetupModal(attempt.weeks, 'Retry Quiz');
    };
    el.retryIncorrectBtn.onclick = () => {
      const incorrectQs = attempt.questions.filter(q => q.userAnswer && q.userAnswer !== q.correctAnswer);
      if (incorrectQs.length === 0) return showToast('No incorrect questions to retry.', 'info');
      // Create a custom quiz from incorrect questions
      startCustomRetry(incorrectQs, 'Retry Incorrect');
    };
    el.retryUnansweredBtn.onclick = () => {
      const unansweredQs = attempt.questions.filter(q => !q.userAnswer);
      if (unansweredQs.length === 0) return showToast('No unanswered questions to retry.', 'info');
      startCustomRetry(unansweredQs, 'Retry Unanswered');
    };
    el.chooseAnotherBtn.onclick = () => {
      renderDashboard();
      switchView(el.dashboardView);
    };
    el.exportCsvBtn.onclick = () => exportCSV(attempt);
  }

  function renderReview(attempt, filter) {
    el.reviewList.innerHTML = '';
    attempt.questions.forEach((q, i) => {
      const isCorrect = q.userAnswer === q.correctAnswer;
      const isUnanswered = !q.userAnswer;

      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'incorrect' && (isCorrect || isUnanswered)) return;
      if (filter === 'unanswered' && !isUnanswered) return;

      let statusClass = isUnanswered ? 'is-unanswered' : (isCorrect ? 'is-correct' : 'is-incorrect');
      let statusText = isUnanswered ? 'Unanswered' : (isCorrect ? 'Correct' : 'Incorrect');

      const item = document.createElement('div');
      item.className = `review-item ${statusClass}`;

      let optsHtml = '';
      q.options.forEach(o => {
        let optClass = '';
        let tag = '';
        if (o.label === q.correctAnswer) {
          optClass = 'is-correct';
          tag = '<span class="review-tag">Correct Answer</span>';
        } else if (o.label === q.userAnswer) {
          optClass = 'is-chosen-wrong';
          tag = '<span class="review-tag">Your Answer</span>';
        }

        optsHtml += `
          <div class="review-option ${optClass}">
            <span class="r-label">${o.label}</span>
            <span>${o.text}</span>
            ${tag}
          </div>
        `;
      });

      item.innerHTML = `
        <div class="review-head">
          <span class="q-badge" style="min-width: 36px; height: 26px; padding: 0 8px; font-size: 0.7rem;">Q${i + 1}</span>
          <span class="q-week-tag">Week ${q.week}</span>
          <span class="review-status">${statusText}</span>
        </div>
        <p class="review-question">${q.question}</p>
        <div class="review-options">${optsHtml}</div>
        ${q.explanation ? `<div class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</div>` : ''}
      `;
      el.reviewList.appendChild(item);
    });
  }

  function startCustomRetry(questions, title) {
    // We don't shuffle these, just use as is
    currentQuiz = {
      questions: questions.map(q => ({
        ...q,
        userAnswer: null, // reset
        _revealed: false
      })),
      currentIndex: 0,
      answers: {},
      markedForReview: new Set(),
      config: {
        weeks: [...new Set(questions.map(q => q.week))].sort((a, b) => a - b),
        count: questions.length,
        order: 'original',
        shuffleOptions: false,
        feedback: settings.feedback,
        maxMarks: questions.length,
        timer: false,
        timerMinutes: 0,
        negative: false,
        penalty: 0,
        allowChange: true
      },
      startTime: Date.now()
    };
    activeAttempt = currentQuiz;
    saveActiveAttempt();
    startQuizRender();
  }

  function exportCSV(attempt) {
    const rows = [
      ['Question ID', 'Week', 'Question', 'Your Answer', 'Correct Answer', 'Status']
    ];
    attempt.questions.forEach(q => {
      const status = !q.userAnswer ? 'Unanswered' : (q.userAnswer === q.correctAnswer ? 'Correct' : 'Incorrect');
      rows.push([
        `"${q.id}"`,
        q.week,
        `"${q.question.replace(/"/g, '""')}"`,
        q.userAnswer || '-',
        q.correctAnswer,
        status
      ]);
    });

    const csvContent = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `quizlab_results_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /* ============================================================
     12. KEYBOARD NAVIGATION
     ============================================================ */
  document.addEventListener('keydown', (e) => {
    if (!el.quizView.hidden && currentQuiz) {
      if (e.key === 'ArrowRight' && currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
        if (!el.nextBtn.hidden) el.nextBtn.click();
      } else if (e.key === 'ArrowLeft' && currentQuiz.currentIndex > 0) {
        if (!el.prevBtn.disabled) el.prevBtn.click();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        const btns = $$('.option', el.optionsList);
        if (btns[idx] && !btns[idx].classList.contains('is-disabled')) {
          btns[idx].click();
        }
      }
    }
  });

  /* ============================================================
     13. INIT
     ============================================================ */
  function init() {
    loadData();
    applyTheme(settings.theme);
    renderDashboard();
    switchView(el.dashboardView);
  }

  init();

})();
