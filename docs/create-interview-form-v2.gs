/**
 * Interview form v2 · KIU students and free courses outside the university.
 * Filled in by the interviewer DURING a live conversation (not sent to students).
 *
 * How to use: script.google.com → New project → delete everything → paste this file →
 * Ctrl+S → choose createInterviewFormV2 → Run → allow access → open the links in the log.
 *
 * Design rules followed:
 *  1. Short: about 10 minutes, ~15 questions on the longest path.
 *  2. One idea per question; no double questions.
 *  3. Neutral wording; our own prediction is never asked directly.
 *  4. Past behaviour ("the last time…"), never "would you…".
 *  5. Closed answers are mutually exclusive and complete, with "Other" / "Don't remember".
 *  6. Easy facts first, harder stories later, contact details last.
 *  7. Branching: students with no outside course skip to their own short section.
 *  8. Only interview details are required; nothing else forces an answer.
 *  9. Only 3 open questions per path: enough for the 3 verbatim quotes each log needs.
 */
function createInterviewFormV2() {
  var form = FormApp.create('Interview v2 · Students and free courses');
  form.setDescription(
    'KIU · Product Development · Nikoloz Tsikaridze & Guram Tsiklauri\n' +
    'Filled in by the interviewer during the conversation. Write open answers exactly as they were said.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);

  // ---------- Interview details (required) ----------
  form.addSectionHeaderItem().setTitle('Interview details');
  form.addTextItem().setTitle('First name or code name').setRequired(true);
  form.addDateItem().setTitle('Date').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Who asked?')
    .setChoiceValues(['Nikoloz (NTS)', 'Guram (GTS)']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Agreed to notes being taken?')
    .setChoiceValues(['Yes', 'No']).setRequired(true);

  // ---------- About you (easy facts first) ----------
  form.addPageBreakItem().setTitle('About you');
  form.addMultipleChoiceItem().setTitle('1. What do you study?')
    .setChoiceValues(['Computer science', 'Business / management', 'Mathematics'])
    .showOtherOption(true);
  form.addMultipleChoiceItem().setTitle('2. Which year are you in?')
    .setChoiceValues(['1st', '2nd', '3rd', '4th', "Master's"]);
  form.addMultipleChoiceItem().setTitle('3. What do you plan to do after your studies?')
    .setChoiceValues(['A job in my field', "A master's degree", 'My own business', 'Not decided yet'])
    .showOtherOption(true);
  var q4 = form.addMultipleChoiceItem()
    .setTitle('4. In the last 24 months, did you take any course outside the university?');

  // ---------- Section A · Took a course ----------
  var pageYes = form.addPageBreakItem()
    .setTitle('Your last outside course')
    .setHelpText('Think only about the most recent course.');
  form.addCheckboxItem().setTitle('5. Who ran that course?')
    .setChoiceValues(['TBC', 'Comschool', 'GITA', 'Coursera / Udemy', 'Erasmus+ / RiHEI', "Don't remember"])
    .showOtherOption(true);
  form.addMultipleChoiceItem().setTitle('6. Where did you first hear about it?')
    .setChoiceValues(['From a friend', 'A university notice', 'LinkedIn', 'Facebook / Instagram',
                      'Searching on Google', "Don't remember"])
    .showOtherOption(true);
  form.addMultipleChoiceItem()
    .setTitle('7. From when you started looking to when you signed up, how long did it take?')
    .setChoiceValues(["I didn't search, it came to me", 'Less than a day', '1 to 7 days',
                      '1 to 4 weeks', 'More than a month', "Don't remember"]);
  form.addCheckboxItem().setTitle('8. Why did you take it? (choose all that apply)')
    .setChoiceValues(['To get a job or internship', 'To go deeper than the university course',
                      'The university did not teach it then', 'For the certificate',
                      'A friend was taking it'])
    .showOtherOption(true);
  form.addMultipleChoiceItem().setTitle('9. What did it cost?')
    .setChoiceValues(['Free', 'Up to 100 GEL', '100 to 300 GEL', 'More than 300 GEL', "Don't remember"]);
  form.addMultipleChoiceItem().setTitle('10. About how many hours did it take in total?')
    .setChoiceValues(['Up to 20', '20 to 50', '50 to 100', '100 to 200', 'More than 200', "Don't remember"]);
  form.addParagraphTextItem()
    .setTitle('11. Tell me how you found this course: where were you looking, and what happened?')
    .setHelpText('Exact words.');
  form.addParagraphTextItem()
    .setTitle('12. Tell me about the last free course you heard about too late, or almost missed.')
    .setHelpText('If it never happened, write "never".');

  // ---------- Section B · No course ----------
  var pageNo = form.addPageBreakItem().setTitle('No outside course');
  form.addMultipleChoiceItem().setTitle('5. What was the main reason?')
    .setChoiceValues(["I didn't need one", "I couldn't find one that fit", 'I had no time',
                      'It cost too much', "I didn't know where to look"])
    .showOtherOption(true);
  form.addParagraphTextItem()
    .setTitle('6. Tell me about the last time you thought about taking a course. What happened?')
    .setHelpText('Exact words.');
  form.addParagraphTextItem()
    .setTitle('7. Where did you look, or who told you about courses like that?')
    .setHelpText('Exact words.');

  // ---------- Closing ----------
  var pageClose = form.addPageBreakItem().setTitle('Closing');
  form.addTextItem().setTitle('Who else should we talk to about this?');
  form.addMultipleChoiceItem().setTitle('Can we come back to you later with more questions?')
    .setChoiceValues(['Yes', 'No']);

  // ---------- Interviewer notes ----------
  form.addPageBreakItem()
    .setTitle('Interviewer notes')
    .setHelpText('Interviewer only, after the conversation.');
  form.addMultipleChoiceItem().setTitle('Did they say finding a course was hard?')
    .setChoiceValues(['Yes, before we asked', 'Only after we asked', 'No']);
  form.addParagraphTextItem().setTitle('★ What surprised us?');

  // ---------- Branching ----------
  q4.setChoices([
    q4.createChoice('Yes', pageYes),
    q4.createChoice('No', pageNo)
  ]);
  pageNo.setGoToPage(pageClose); // after section A, skip section B

  Logger.log('Edit link: ' + form.getEditUrl());
  Logger.log('Fill-in link: ' + form.getPublishedUrl());
}
