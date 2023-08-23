# 주제

- 나의 프로필 페이지입니다.

# 기술

- ReactJS, React Hook
- SCSS
- AWS Amplify
  1. Hosting
  2. Authentication
  3. Database and storage
  - Aplify CLI 및 라이브러리를 통한 Amazon S3 스토리지 서비스 사용
  - GraphQL 스키마
  - React 연결
    <!-- - Firebase -->
    <!-- - TypeScript  -->
    <!-- - NestJS -->

# 기획

## Style

### Common

    - font, margin, padding : 화면 비율에 따라 설정
    - color : 초기버전은 무채색으로 진행하되, 각 요소에 스타일용 class를 도입하여 일관성있는 스타일을 디자인합니다.
        - 3 ~ 4가지 스타일(색상, 채도 등을 기준으로 나눈 종류)을 나타내는 class 명을 설정합니다.
        - class name
            - bass : 무거운 톤
            - mid : 중간 톤
            - treble : 가벼운 톤

### Structure

    - App.css 에서 전역 스타일 설정
    - 컴포넌트 별로 스타일 설정

### Identifier 관리

- class
- id
  - homeTitle : 페이지 홈 제목

## Component

- Header
  - Title
  - Home Button
  - Setting
    - Login Button
    - Light Bulb
    - Language
- Main
  - Nav
  - Profile
    - image
    - intro
    - education
    - ability
    - career
    - certificate
  - Blog
    - Category
    - Board
  - Portfolio
    - Category
    - Board
      - 각 포트폴리오의 메인 컴포넌트를 포함시키도록 합니다.
  - Network
    - 친구의 Profile 페이지를 링크합니다.
    - 친구와 함께한 프로젝트가 표시됩니다.
  - Vision
    - 앞으로의 계획
    - 팀원 및 재원 모집
- Footer

- Chat
- Login
- Pay

## State

- Light / Dark
- EN / KO
