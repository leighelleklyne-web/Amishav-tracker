# עמישב – מעקב חניכים

אתר למעקב שבועי אחרי חניכי תוכנית עמישב (תנועת בני עקיבא): מדריכים, נחשון (מועדונית / אח גדול), שמיניסטים ורכזים.

- **מדריכים / נחשוניסטים** – מוסיפים חניכים ומעדכנים כל שבוע: הגיע/ה, מצב השתלבות (ירוק/צהוב/אדום) וצעד לשבוע–שבועיים.
- **רכזים / שמיניסטים** – תמונת מצב לכל סניף, מעקב מפורט, ומי עוד לא עודכן.

## חיבור ל-Firebase (נתונים משותפים ומיילים לאיפוס סיסמה)

1. יוצרים פרויקט ב-[Firebase](https://console.firebase.google.com), מפעילים **Authentication → Email/Password** ו-**Firestore Database**.
2. מוסיפים Web app ומדביקים את ה-`firebaseConfig` בקובץ `firebase-config.js` (במקום `null`).
3. ב-**Firestore → Rules** מדביקים את התוכן של `firestore.rules` ולוחצים Publish.
4. ב-**Authentication → Settings → Authorized domains** מוסיפים את `leighelleklyne-web.github.io`.

כל עוד `firebase-config.js` ריק, האתר עובד ב"מצב מקומי": הנתונים נשמרים רק בדפדפן של כל משתמש.
