
# Project Submission Report

## 1. Student Details
- **Full Name:** Sewe
- **GitHub Username:** KeittahSewe
- **Email:** keittah.oyunga@strathmore.edu
---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/personal-portfolio-151426/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

- **Commit URL:** https://github.com/IS-PROJECT-2026/personal-portfolio-151426/commit/b465941
- **Why this one?** The subject is 34 characters and uses the feat tag correctly, and the body explains why the approach was chosen rather than restating the diff. It records that redefining six custom properties under a data-theme attribute flips the entire site without touching a single component rule.

### B. A Mistake or Struggle

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/personal-portfolio-151426/pull/24
- **What happened and how did you recover?** When I came to merge the branch stack I found that feat/1-css-tokens had been pushed without a pull request ever being opened, so it had no review trail. I also noticed PR #24 was titled "add responsive breakpoints" with no conventional type prefix. I opened the missing pull request before continuing, renamed #24 to "style: add responsive breakpoints", then merged the stack in dependency order.

### C. A Pull Request You're Proud Of

- **PR URL:** https://github.com/IS-PROJECT-2026/personal-portfolio-151426/pull/21
- **What did you check before merging?** I checked that the four commits read as a sequence, markup then validation script then script link then styling, and that no debug code or stray files had entered the diff. I also confirmed the Closes #6 footer was present so the issue would close on merge.

### D. One Thing You Would Do Differently

- **What would you change?** I would branch every feature from main rather than stacking each branch on the one before it. I stacked because a GitHub outage blocked merging for several hours, but it meant my pull requests defaulted to a base of main and displayed commits belonging to earlier branches.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/personal-portfolio-151426/tree/feat/2-header-nav
---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<img width="908" height="659" alt="image" src="https://github.com/user-attachments/assets/4b6417f0-fa45-4261-881e-37e5776bf5b9" />


* **Caption:** Three milestones covering Foundation and Layout, Core Content, and Polish and Deployment, with every issue assigned to a phase.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1538" height="867" alt="image" src="https://github.com/user-attachments/assets/406facee-6631-4b36-90b1-9fdf6387f2e4" />


* **Caption:**Cards moved through Todo, In Progress, and Done as each issue was branched, built, and merged.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1470" height="840" alt="image" src="https://github.com/user-attachments/assets/5e6eaad3-42bd-4a62-a85b-23f5f9ec2e78" />


* **Caption:** Branches follow type/issue-number-description across feat, style, docs, and chore.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

<img width="1600" height="720" alt="image" src="https://github.com/user-attachments/assets/84698c9b-d1a2-4cb3-8e7b-30f9e765e65e" />


* **Caption:** PR #21 builds the contact section across four commits and closes issue #6 through its footer.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?**Competing line changes, where both branches edited the same lines of the same file.

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="1600" height="686" alt="image" src="https://github.com/user-attachments/assets/20a655e7-606b-40c7-a296-53727c4c4714" />


* **Caption:**feat/conflict-a-tagline and feat/conflict-b-tagline both rewrote the hero lead paragraph in index.html. The merge halted with "Automatic merge failed; fix conflicts and then commit the result."

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1600" height="899" alt="image" src="https://github.com/user-attachments/assets/f7cdb609-a073-41e3-a600-402a7156d3b1" />


* **Caption:** Branch A shortened the paragraph to one sentence while branch B expanded it to name specific areas of work. Both touched the same lines, so git had no basis to choose. I wrote a single version keeping A's brevity and B's specificity rather than accepting either side wholesale.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="1600" height="686" alt="image" src="https://github.com/user-attachments/assets/428c5be6-e6dc-44ab-b025-3240b8a111f6" />


* **Caption:** The graph shows both branches diverging from main and rejoining at the resolution commit, with no markers remaining in the file.

---

### Conflict 2 — Different Cause

**What cause did you use?** Modify and delete conflict, where one branch removed a file that the other branch changed.
**Why does this cause trigger a conflict?** Git cannot apply a modification to a file that no longer exists on the other side, so it stops and asks which outcome was intended rather than guessing between keeping the change and honouring the deletion.

<img width="1600" height="316" alt="image" src="https://github.com/user-attachments/assets/3d89e50a-9e7a-48ff-aa59-70da46c21aca" />


* **Caption:** Caption: chore/conflict-c-delete removed js/main.js while feat/conflict-d-script added a console notice to it. Git reported "deleted in HEAD and modified in feat/conflict-d-script". This type produces no inline markers, since the dispute is over whether the file should exist rather than over its contents.

---

### Conflict 3 — Different Cause

**What cause did you use?** Add and add conflict, where both branches independently created a file at the same path.
**Why does this cause trigger a conflict?**The two versions share no common ancestor for that path, so git has no base revision to diff against and cannot compute a three way merge. It presents both files in full and leaves the choice to you.
<img width="891" height="875" alt="image" src="https://github.com/user-attachments/assets/2ce50de3-e2ce-474a-b7e6-0004a8873a23" />


* **Caption:** Caption: docs/conflict-e-license created an MIT LICENSE while docs/conflict-f-license created an Apache 2.0 LICENSE at the same path. I kept MIT, since permissive terms suit a portfolio template.

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [x] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
