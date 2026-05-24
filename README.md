# Wakad Toastmasters IPL Registration Website

A premium, modern, responsive landing page for the **400th Wakad Toastmasters Meeting – Impromptu Premier League (IPL)** event. Built using **React**, **Tailwind CSS v4**, and **Framer Motion**.

Featuring a clean light-themed aesthetic compliant with Toastmasters brand colors, a digital scoreboard countdown timer, a Hall of Fame champion player card showcase (featuring TM Punit Hadani), and a multi-step registration form that generates printable ticket passes and saves registrations in a database.

---

## 🚀 How to Run the Project Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the site.

### 3. Build for Production
Creates optimized production-ready bundle files inside the `dist/` directory:
```bash
npm run build
```

---

## 📊 Google Sheets Centralized Database Setup

To gather registrations from all devices directly into a centralized Google Sheet, follow these simple steps:

### Step 1: Create your Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Give it a name (e.g. `Wakad TM IPL Registrations`).
3. Add the following column headers in the first row (A1 to K1):
   - **Ticket ID** (Column A)
   - **Name** (Column B)
   - **Contact No** (Column C)
   - **Email ID** (Column D)
   - **Club Name** (Column E)
   - **Area** (Column F)
   - **Role** (Column G)
   - **Experience (Years)** (Column H)
   - **Wins / Accomplishments** (Column I)
   - **Shortlist Pitch** (Column J)
   - **Registration Date** (Column K)

### Step 2: Open Apps Script
1. In the menu of your Google Sheet, go to **Extensions** ➔ **Apps Script**.
2. Delete any existing code inside the editor (e.g., the default `myFunction`).

### Step 3: Paste the Apps Script Code
Copy and paste the following Google Apps Script code into the script editor:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  try {
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.id,
      data.name,
      data.contact,
      data.email,
      data.club,
      data.area,
      data.role,
      data.experience || "N/A",
      data.wins || "N/A",
      data.sellingPoint || "N/A",
      data.timestamp || new Date().toLocaleString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Added to handle pre-flight CORS requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Save the script by clicking the disk icon (or pressing `Ctrl + S`).

### Step 4: Deploy as a Web App
1. Click the **Deploy** button at the top-right and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill out the configuration:
   - **Description**: `WTM IPL Registration API`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(This is important so the registration form can send data without asking users to log in).*
4. Click **Deploy**.
5. Google will ask you to authorize access. Click **Authorize access**, select your Google account, click **Advanced**, click **Go to Untitled project (unsafe)**, and select **Allow**.
6. Copy the **Web App URL** shown in the "New deployment" box (it should end in `/exec`).

### Step 5: Link the Web App URL to your Code
1. Open the file [src/components/RegistrationForm.jsx](file:///c:/Users/akshi/OneDrive/Desktop/IPL%20Registration%20Form/src/components/RegistrationForm.jsx).
2. On line 8, locate the variable:
   ```javascript
   const GOOGLE_SHEET_WEBHOOK_URL = "";
   ```
3. Paste your copied Web App URL inside the quotation marks:
   ```javascript
   const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
   ```
4. Save the file.

---

## 🚀 Push Updates to GitHub
Once you have pasted your Google Web App URL, run the following commands to upload the changes to GitHub and update your deployed site:
```bash
git add .
git commit -m "feat: Connect form to Google Sheets centralized database"
git push origin main
```
