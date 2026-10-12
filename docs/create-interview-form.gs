/**
 * Creates the Google Form "სტუდენტების ინტერვიუ · უნარები უნივერსიტეტის გარეთ".
 * How to use: open https://script.google.com → New project → paste this file →
 * press Run (▶) on createInterviewForm → allow access → open the link in the log.
 */
function createInterviewForm() {
  var form = FormApp.create('სტუდენტების ინტერვიუ · უნარები უნივერსიტეტის გარეთ');
  form.setDescription(
    'KIU · Product Development · Nikoloz Tsikaridze & Guram Tsiklauri\n\n' +
    'ვსწავლობთ, როგორ სწავლობენ სტუდენტები ახალ უნარებს უნივერსიტეტის გარეთ. ' +
    'არაფერს ვყიდით. თქვენს სახელს არსად გამოვიყენებთ.\n' +
    'We are learning how students pick up new skills outside university. ' +
    'We are not selling anything, and we will not use your name anywhere.\n\n' +
    'ჩაწერეთ ზუსტად ისე, როგორც ითქვა. / Write answers exactly as they were said.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);

  // Section 1 · Interview details
  form.addSectionHeaderItem()
    .setTitle('ინტერვიუს დეტალები · Interview details');
  form.addTextItem()
    .setTitle('სახელი ან კოდური სახელი და კურსი · First name or code name, and year')
    .setHelpText('მაგ.: ბექა, მე-3 კურსი · e.g. Beka, 3rd year')
    .setRequired(true);
  form.addDateItem()
    .setTitle('თარიღი · Date')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('ვინ სვამდა კითხვებს? · Who asked?')
    .setChoiceValues(['Nikoloz (NTS)', 'Guram (GTS)'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('ვინ ინიშნავდა? · Who took notes?')
    .setChoiceValues(['Nikoloz (NTS)', 'Guram (GTS)'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('თანხმობა ჩანაწერებზე · Consent to notes')
    .setChoiceValues(['კი · Yes', 'არა · No'])
    .setRequired(true);

  // Section 2 · The interview
  form.addPageBreakItem()
    .setTitle('ინტერვიუ · The interview')
    .setHelpText('ნუ ახსენებთ ჩვენს იდეას. ჰკითხეთ წარსულზე. ' +
                 'Never mention our idea. Ask about the past.');

  var questions = [
    ['1. როგორ სწავლობ ახალ უნარებს ყოველდღიურად?',
     'How do you learn new skills day to day?'],
    ['2. რას სწავლობ და რა პროფესიით გინდა მუშაობის დაწყება, სწავლის შემდეგ ან პარალელურად?',
     'What do you study, and what job do you want to start, after or during your studies?'],
    ['3. მომიყევი, ბოლოს როდის ისწავლე რამე ახალი უნივერსიტეტის გარეთ. თავიდან ბოლომდე.',
     'Tell me about the last time you learned something new outside the university, from the start.'],
    ['4. რისთვის დაგჭირდა ეს მაშინ? რა მოხდებოდა, რომ არ გესწავლა?',
     'What did you need it for at that time? What would have happened if you had not learned it?'],
    ['5. რა დრო და თანხა დაგიჯდა? რამდენი საათი, რამდენი ლარი?',
     'What did it cost you in time and money? How many hours, how many lari?'],
    ['6. ბოლოს როდის მიატოვე ან ვერ დაასრულე მსგავსი კურსი? რა მოხდა?',
     'When did you last drop or not finish a course like that? What happened?'],
    ['7. სად იპოვე ეს კურსი და როგორ აირჩიე? რამდენ ხანს ეძებდი?',
     'Where did you find the course and how did you choose it? How long did you search?'],
    ['8. მომიყევი ბოლო სერტიფიკატზე, რომელიც აიღე ან ცადე აგეღო. რა გააკეთე მასთან?',
     'Tell me about the last certificate you got or tried to get. What did you do with it?'],
    ['9. მას შემდეგ რამე ახალ კურსზე ჩაეწერე?',
     'Have you signed up for any new course since then?'],
    ['10. ვის კიდევ უნდა ველაპარაკოთ ამაზე?',
     'Who else should we talk to about this?']
  ];
  questions.forEach(function (q) {
    form.addParagraphTextItem().setTitle(q[0]).setHelpText(q[1]);
  });

  form.addMultipleChoiceItem()
    .setTitle('11. შეიძლება დაგიკავშირდეთ, როცა რამე გვექნება საჩვენებელი?')
    .setHelpText('Can we come back when we have something to show you?')
    .setChoiceValues(['კი · Yes', 'არა · No']);

  // Section 3 · Interviewer notes
  form.addPageBreakItem()
    .setTitle('ინტერვიუერის შენიშვნები · Interviewer notes');
  form.addMultipleChoiceItem()
    .setTitle('თავად ახსენა, რომ უნივერსიტეტი ამ უნარს ჯერ არ ასწავლიდა, სანამ ვკითხავდით?')
    .setHelpText('Did they say KIU was not teaching the skill yet, before we mentioned it?')
    .setChoiceValues(['კი · Yes', 'არა · No', 'მხოლოდ კითხვის შემდეგ · Only after we asked']);
  form.addParagraphTextItem()
    .setTitle('★ რა გაგვიკვირდა? · What surprised us?');

  Logger.log('Edit link: ' + form.getEditUrl());
  Logger.log('Link to share or fill in: ' + form.getPublishedUrl());
}
