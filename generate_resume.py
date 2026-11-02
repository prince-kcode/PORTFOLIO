import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    # 0.45 in margins = ~32.4 pt
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=34,
        rightMargin=34,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=colors.HexColor('#1e1b4b'),
        alignment=TA_CENTER
    )

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor('#4f46e5'),
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#334155'),
        alignment=TA_CENTER
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=12,
        textColor=colors.HexColor('#1e1b4b'),
        spaceBefore=4,
        spaceAfter=2,
        textTransform='uppercase'
    )

    subheading_bold = ParagraphStyle(
        'SubHeadingBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=colors.HexColor('#0f172a')
    )

    subheading_right = ParagraphStyle(
        'SubHeadingRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=colors.HexColor('#4f46e5'),
        alignment=TA_RIGHT
    )

    subheading_detail = ParagraphStyle(
        'SubHeadingDetail',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.HexColor('#475569')
    )

    subheading_loc = ParagraphStyle(
        'SubHeadingLoc',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.HexColor('#64748b'),
        alignment=TA_RIGHT
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=1.5
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#1e293b')
    )

    story = []

    # 1. Header
    story.append(Paragraph("PRINCE KUMAR", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Artificial Intelligence &amp; Machine Learning Engineering Student | Web Developer", title_style))
    story.append(Spacer(1, 3))

    contact_line = (
        'Bengaluru, Karnataka &bull; '
        '<font color="#4f46e5"><u>princek8320@gmail.com</u></font> &bull; '
        '<font color="#4f46e5"><a href="https://linkedin.com/in/prince-kumar-00863b336"><u>LinkedIn</u></a></font> &bull; '
        '<font color="#4f46e5"><a href="https://github.com/prince-kcode"><u>GitHub</u></a></font> &bull; '
        '<font color="#4f46e5"><a href="https://prince-kcode.github.io/PORTFOLIO/"><u>Portfolio</u></a></font>'
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.2, color=colors.HexColor('#4f46e5'), spaceBefore=2, spaceAfter=4))

    # 2. Summary
    story.append(Paragraph("Professional Summary", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceBefore=1, spaceAfter=3))
    summary_text = (
        "Enthusiastic and technically driven B.Tech CSE (AI &amp; ML) undergraduate at Presidency University, Bengaluru. "
        "Proficient in full-stack web technologies, modern JavaScript frameworks, and practical machine learning applications. "
        "Experienced in building end-to-end IoT solutions and responsive web architectures with a commitment to clean code and continuous learning."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. Technical Skills
    story.append(Paragraph("Technical Skills", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceBefore=1, spaceAfter=3))

    skills_data = [
        [
            Paragraph("<b>Languages:</b>", body_style),
            Paragraph("Python, JavaScript (ES6+), C/C++, HTML5, CSS3, SQL", body_style)
        ],
        [
            Paragraph("<b>Frameworks &amp; Libs:</b>", body_style),
            Paragraph("React.js, Tailwind CSS, Node.js, Express.js, Framer Motion", body_style)
        ],
        [
            Paragraph("<b>AI &amp; Data:</b>", body_style),
            Paragraph("Machine Learning Foundations, Neural Networks Basics, Data Extraction &amp; Analysis, GenAI Prompting", body_style)
        ],
        [
            Paragraph("<b>Developer Tools:</b>", body_style),
            Paragraph("Git, GitHub, Vite, RESTful APIs, Web3Forms, VS Code, Linux Shell Basics", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[120, 424])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 4))

    # 4. Education
    story.append(Paragraph("Education", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceBefore=1, spaceAfter=3))

    # B.Tech
    t1 = Table([
        [
            Paragraph("<b>Presidency University</b> — Bengaluru, Karnataka", subheading_bold),
            Paragraph("2023 — Present", subheading_right)
        ],
        [
            Paragraph("<i>B.Tech in Computer Science &amp; Engineering (AI &amp; ML) — 4th Semester</i>", subheading_detail),
            Paragraph("Bengaluru, India", subheading_loc)
        ]
    ], colWidths=[384, 160])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t1)
    story.append(Paragraph("&bull; Core Subjects: Data Structures, Algorithms, AI/ML Concepts, Web Engineering, OOP.", bullet_style))
    story.append(Spacer(1, 2))

    # 12th & 10th
    t2 = Table([
        [
            Paragraph("<b>Bihar School Examination Board (BSEB)</b> — Science", subheading_bold),
            Paragraph("2021 — 2022", subheading_right)
        ],
        [
            Paragraph("<i>Senior Secondary (12th Grade) — Physics, Chemistry, Mathematics</i>", subheading_detail),
            Paragraph("", subheading_loc)
        ],
        [
            Paragraph("<b>Central Board of Secondary Education (CBSE)</b>", subheading_bold),
            Paragraph("2019 — 2020", subheading_right)
        ],
        [
            Paragraph("<i>Secondary School Examination (10th Grade) — Science &amp; Mathematics</i>", subheading_detail),
            Paragraph("", subheading_loc)
        ]
    ], colWidths=[384, 160])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t2)
    story.append(Spacer(1, 4))

    # 5. Projects
    story.append(Paragraph("Projects", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceBefore=1, spaceAfter=3))

    # Project 1
    p1 = Table([
        [
            Paragraph("<b>Virtual Doctor with IoT</b> | <i>Python, IoT Sensors, Web Dashboard</i>", subheading_bold),
            Paragraph("Personal Project", subheading_right)
        ]
    ], colWidths=[400, 144])
    p1.setStyle(TableStyle([('PADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(p1)
    story.append(Paragraph("&bull; Built an AI-assisted health monitoring prototype integrating IoT hardware sensors for real-time vital telemetry.", bullet_style))
    story.append(Paragraph("&bull; Implemented analytical logic in Python to assess sensor readings and produce automated baseline diagnosis feedback.", bullet_style))
    story.append(Paragraph("&bull; Designed a responsive web dashboard for healthcare providers and patients to visualize vitals trends over time.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 2
    p2 = Table([
        [
            Paragraph("<b>Interactive Portfolio Web Application</b> | <i>React, Vite, Tailwind CSS, Lucide</i>", subheading_bold),
            Paragraph("Live Deployment", subheading_right)
        ]
    ], colWidths=[400, 144])
    p2.setStyle(TableStyle([('PADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(p2)
    story.append(Paragraph("&bull; Developed and deployed an ultra-fast, responsive web application showcasing projects, education, and credentials.", bullet_style))
    story.append(Paragraph("&bull; Integrated Web3Forms API for frictionless email contact with client-side form validation and interactive status feedback.", bullet_style))
    story.append(Paragraph("&bull; Configured automated build and deployment pipelines using GitHub Pages for continuous delivery.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 3
    p3 = Table([
        [
            Paragraph("<b>Presidency University Web Portal Clone</b> | <i>HTML5, CSS3, JavaScript</i>", subheading_bold),
            Paragraph("Academic Project", subheading_right)
        ]
    ], colWidths=[400, 144])
    p3.setStyle(TableStyle([('PADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(p3)
    story.append(Paragraph("&bull; Recreated the institutional web portal focusing on pixel-accurate layout, accessible navigation, and semantic structure.", bullet_style))
    story.append(Paragraph("&bull; Designed responsive CSS grid and flexbox layouts to ensure optimal performance across mobile and desktop devices.", bullet_style))
    story.append(Spacer(1, 4))

    # 6. Certifications & Honors
    story.append(Paragraph("Honors &amp; Verified Certifications", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#cbd5e1'), spaceBefore=1, spaceAfter=3))

    certs_table_data = [
        [
            Paragraph("<b>Smart India Hackathon 2026 (Internal)</b> &mdash; <i>Top 150 Teams (Presidency University &bull; AICTE)</i>", subheading_bold),
            Paragraph("Sep 2026", subheading_right)
        ],
        [
            Paragraph("<b>Introduction to Artificial Intelligence</b> &mdash; <i>Infosys Springboard (verify.onwingspan.com)</i>", subheading_bold),
            Paragraph("Oct 2026", subheading_right)
        ],
        [
            Paragraph("<b>Mastering Databases with Python</b> &mdash; <i>GUVI | HCL &bull; Credential ID: 381274grYHF36871XR</i>", subheading_bold),
            Paragraph("Sep 2026", subheading_right)
        ],
        [
            Paragraph("<b>Fund My Crazy: Build Night Challenge (Google Gemini)</b> &mdash; <i>Google Student Ambassador</i>", subheading_bold),
            Paragraph("Aug 2026", subheading_right)
        ],
        [
            Paragraph("<b>TCS iON Career Edge &ndash; Young Professional</b> &mdash; <i>Tata Consultancy Services (ID: 240640-29210179-1016)</i>", subheading_bold),
            Paragraph("Nov 2025", subheading_right)
        ],
        [
            Paragraph("<b>GenAI Simulations (AI Chatbot &amp; Data Analytics)</b> &mdash; <i>BCG X &amp; Tata &bull; Forage</i>", subheading_bold),
            Paragraph("2025", subheading_right)
        ]
    ]
    ct = Table(certs_table_data, colWidths=[430, 114])
    ct.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
    ]))
    story.append(ct)

    doc.build(story)
    print(f"Resume PDF successfully created at {output_path}")

if __name__ == '__main__':
    target = os.path.abspath(os.path.join(os.path.dirname(__file__), 'public', 'Prince_Kumar_Resume.pdf'))
    create_resume(target)
    # Also write a copy to public/resume.pdf
    resume_target = os.path.abspath(os.path.join(os.path.dirname(__file__), 'public', 'resume.pdf'))
    create_resume(resume_target)

