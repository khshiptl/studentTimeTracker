# Student Time Tracker

A web application designed for Kumon Math and Reading Centers to track student check-ins, check-outs, and session durations in real time.

## Overview
The system allows managers to oversee student activity through a clean dashboard, while staff can check students in and out using a secure PIN system. Built with Firebase for authentication, Firestore database management, and real-time data synchronization, the project simplifies attendance tracking and ensures accurate time logging for every student.

## Features
- Manager authentication and email verification
- Staff PIN-based access
- Real-time student check-in and check-out tracking
- Color-coded time indicators:
  - Green: Within expected duration
  - Yellow: Approaching time limit
  - Red: Exceeded time limit
- Private student lists for each manager
- Session logs showing all check-ins, check-outs, and total session duration per student
- Mobile-friendly staff panel for quick access

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Firebase Authentication, Firestore Database
- Real-time updates: Firestore onSnapshot() listeners
- Hosting: Firebase Hosting

## Future Improvements
- Peak time visualization and traffic analysis
- Average session duration summaries
- Efficiency metrics for student and staff performance
- Exportable reports for attendance and time tracking

## Author
Laleen Salim  
Built for Kumon Math & Reading Center – Charlotte, NC  
[LinkedIn](https://www.linkedin.com/in/your-link) | [GitHub](https://github.com/khshiptl)
