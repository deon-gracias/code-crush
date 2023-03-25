import 'app_localizations.dart';

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appName => 'Plant Disease Detector';

  @override
  String get instructions => 'Instructions';

  @override
  String get instruction1 => 'Take/Select a photo of an affected plant by tapping the camera button below';

  @override
  String get instruction2 => 'Give it a short while before you can get a suggestion of the disease';

  @override
  String get yourHistory => 'Your History';

  @override
  String get nothing => 'Nothing to Show';

  @override
  String get takePhoto => 'Take a Photo';

  @override
  String get selectPhoto => 'Select a Photo';
}
