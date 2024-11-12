# 📄 GitHub CI/CD Template

![CI/CD](https://img.shields.io/badge/CI/CD-Pipeline-blue)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff)
![Python](https://img.shields.io/badge/Python-3.11%2B-blue.svg)
![Build Status](https://github.com/JuanVilla424/github-cicd-template/actions/workflows/ci.yml/badge.svg?branch=main)
![Status](https://img.shields.io/badge/Status-Stable-green.svg)
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

Welcome to the **GitHub CI/CD Template** repository! This project provides a robust and flexible CI/CD pipeline setup using GitHub Actions, tailored for project using Python for backend, node frontend, docker-compose or Dockerfile. Leverage this template to automate your development workflow, from testing and building to deployment and monitoring.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F178-1787243_github-icon-png.png&f=1&nofb=1&ipt=913bc5d745baa725efe14b20bdf6ca3f91044c2be909e8504cc79f13dc0b1729&ipo=images" width="112" alt="CI/CD">

## 📚 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Environment Setup](#-environment-setup)
  - [Pre-Commit Hooks](#-pre-commit-hooks)
  - [Extra Steps](#-extra-steps)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🌟 Features

- **Automated Testing:** Run tests automatically on each push and pull request.
- **Continuous Deployment:** Deploy your application seamlessly to your chosen platform.
- **Code Quality Checks:** Enforce coding standards with linting and formatting tools.
- **Build Optimization:** Optimize build processes for faster deployment cycles.
- **Notifications:** Receive updates and alerts on pipeline status via email or chat integrations.

## 🚀 Getting Started

### 📋 Prerequisites

**Before you begin, ensure you have met the following requirements**:

- **GitHub Account:** You need a GitHub account to use GitHub Actions.
- **Python 3.12+:** Ensure Python is installed on your local machine.
- **Git:** Install [Git](https://git-scm.com/) to clone the repository.
- **NVM:** (Optional) Node.js installation environment versions control
- **Node.js 22.x+**: (Optional) (Required to Push) Used as lint orchestration manager in pre-commit and pre-push

### 🔨 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/JuanVilla424/github-cicd-template.git
   ```

2. Navigate to the Project Directory
   ```bash
    cd github-cicd-template
   ```

### 🔧 Environment Setup

**Mandatory: Setting Up a Python Virtual Environment**

Setting up a Python virtual environment ensures that dependencies are managed effectively and do not interfere with other projects.

1. **Create a Virtual Environment**

   ```bash
   python -m venv venv
   ```

2. **Activate the Virtual Environment**

   On Unix or MacOS:

   ```bash
   source venv/bin/activate
   ```

   On Windows:

   ```bash
    .\venv\Scripts\activate
   ```

   - or

   ```bash
    powershell.exe -ExecutionPolicy Bypass -File .\venv\Scripts\Activate.ps1
   ```

3. **Upgrade pip**

   ```bash
   pip install --upgrade pip
   ```

4. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   pip install poetry
   poetry lock
   poetry install
   ```

   - Deactivate the Virtual Environment

   When you're done, deactivate the environment:

   ```bash
    deactivate
   ```

5. **Docker Extra Steps**: Install Scoop and then install hadolint using scoop, refer to [Extra Steps](#-extra-steps)

### 🛸 Pre-Commit Hooks

**Install and check pre-commit hooks**: MD files changes countermeasures, python format, python lint, yaml format, yaml lint, version control hook, changelog auto-generation

```bash
pre-commit install
pre-commit install -t pre-commit
pre-commit install -t pre-push
pre-commit autoupdate
pre-commit run --all-files
```

### 📌 Extra Steps

1. **Docker**:

   - Using MacOs or Linux:
     ```bash
     brew install hadolint
     ```
   - On Windows **as non-admin user**:
     ```bash
     Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
     Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
     scoop install halint
     ```

## 🛠️ Usage

**To utilize the CI/CD pipeline, follow these steps**:

1. **Configure GitHub Actions**

   - Navigate to the .github/workflows/ directory.
   - Customize the ci.yml file according to your project's requirements.
   - Customize the python.yml file to format and lint python code.
   - Customize the node.yml file to format and lint node.js code if you are hosting frontend.
   - Customize the release-controller file to add or remove **[backend, frontend, docker deployment, database]**

2. **Set Up Secrets**

   - Go to your GitHub repository settings.
   - Navigate to Secrets and add necessary secrets like CODECOV_KEY, etc.

3. **Triggering the Pipeline**

   - Push to Branches: Pushing code to dev, test, prod, or main branches will trigger the pipeline.
   - Pull Requests: Opening or updating pull requests will run tests and checks.

4. **Monitoring Pipeline Status**
   - Check the Actions tab in your GitHub repository to monitor the status of your workflows.
   - Integrate notifications with Slack, Email, or other communication tools for real-time updates.

## 🤝 Contributing

**Contributions are welcome! To contribute to this repository, please follow these steps**:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "feat(<scope>): your feature commit message - lower case"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request into** `dev` **branch**

Please ensure your contributions adhere to the Code of Conduct and Contribution Guidelines.

### 🛠️ Adding a New Workflow

1. **Create a New Workflow File**

   ```bash
   touch .github/workflows/new-workflow.yml
   ```

2. **Define the Workflow**

   Customize the workflow according to your needs, using existing workflows as references.

3. **Commit and Push**
   ```bash
   git add .github/workflows/new-workflow.yml
   git commit -m "chore(core): added new workflow - lower case"
   git push origin feature/your-feature-name
   ```

## 📫 Contact

For any inquiries or support, please open an issue or contact [r6ty5r296it6tl4eg5m.constant214@passinbox.com](mailto:r6ty5r296it6tl4eg5m.constant214@passinbox.com).

---

## 📜 License

2024 - This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html). You are free to use, modify, and distribute this software under the terms of the GPL-3.0 license. For more details, please refer to the [LICENSE](LICENSE) file included in this repository.
