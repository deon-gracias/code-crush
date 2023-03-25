import 'app_localizations.dart';

/// The translations for Hindi (`hi`).
class AppLocalizationsHi extends AppLocalizations {
  AppLocalizationsHi([String locale = 'hi']) : super(locale);

  @override
  String get appName => 'संयंत्र रोग डिटेक्टर';

  @override
  String get instructions => 'निर्देश';

  @override
  String get instruction1 => 'नीचे दिए गए कैमरा बटन पर टैप करके किसी प्रभावित पौधे की फ़ोटो लें/चयन करें';

  @override
  String get instruction2 => 'इससे पहले कि आप रोग का सुझाव प्राप्त कर सकें, इसे थोड़ी देर दें';

  @override
  String get yourHistory => 'आपका इतिहास';

  @override
  String get nothing => 'दिखाने के लिए कुछ नहीं';

  @override
  String get takePhoto => 'एक तस्वीर लें';

  @override
  String get selectPhoto => 'एक फोटो चुनें';
}
