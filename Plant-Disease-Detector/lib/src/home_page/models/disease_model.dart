import 'package:build_context_provider/build_context_provider.dart';
// import 'package:current_context/current_context.dart';
import 'package:hive/hive.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
part 'disease_model.g.dart';

// BuildContext? context;
// BuildContext context = new BuildContext();
@HiveType(typeId: 0)
class Disease extends HiveObject {
  @HiveField(0)
  final String name;

  @HiveField(1)
   String? possibleCauses;

  @HiveField(2)
   String? possibleSolution;

  @HiveField(3)
   String? imagePath;

  @HiveField(4)
   DateTime? dateTime;

  final buildContextProvider = BuildContextProvider();

  Disease({required this.name, required this.imagePath}) {
    dateTime = DateTime.now();

    buildContextProvider((context) {
      switch (name) {
        case "Pepper Bell Bacterial Spot":
          possibleCauses = AppLocalizations.of(context)!.case1P;
          possibleSolution = AppLocalizations.of(context)!.case1S;
          break;

        case "Pepper Bell Healthy":
          possibleCauses = AppLocalizations.of(context)!.okay;
          possibleSolution = AppLocalizations.of(context)!.na;
          break;

        case "Potato Early Blight":
          possibleCauses = AppLocalizations.of(context)!.case2P;
          possibleSolution = AppLocalizations.of(context)!.case2S;
          break;

        case "Potato Healthy":
          possibleCauses = AppLocalizations.of(context)!.okay;
          possibleSolution = AppLocalizations.of(context)!.na;
          break;

        case "Potato  Blight?":
          possibleCauses = AppLocalizations.of(context)!.case6P;
          possibleSolution = AppLocalizations.of(context)!.case6S;
          break;

        case "Tomato Bacterial Spot":
          possibleCauses =
              "Xanthomonas bacteria which can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.";
          possibleSolution =
              "Remove symptomatic plants from the field or greenhouse to prevent the spread of bacteria to healthy plants.";
          break;

        case "Tomato Early Blight":
          possibleCauses = AppLocalizations.of(context)!.case7P;
          possibleSolution = AppLocalizations.of(context)!.case7S;
          break;

        case "Tomato Healthy":
          possibleCauses = AppLocalizations.of(context)!.okay;
          possibleSolution = AppLocalizations.of(context)!.na;
          break;

        case "Tomato  Blight?":
          possibleCauses = AppLocalizations.of(context)!.case9P;
          possibleSolution = AppLocalizations.of(context)!.case9S;
          break;

        case "Tomato Leaf Mold":
          possibleCauses = "High relative humidity (greater than 85%).";
          possibleSolution =
              "Growing leaf mold resistant varieties, use drip irrigation to avoid watering foliage.";
          break;

        case "Tomato Septoria Leaf Spot":
          possibleCauses =
              "It is a fungus and spreads by spores most rapidly in wet or humid weather. Attacks plants in the nightshade family, and can be harbored on weeds within this family.";
          possibleSolution =
              "Remove infected leaves immediately, use organic fungicide options.";
          break;

        case "Tomato Spotted Spider Mites":
          possibleCauses =
              "Spider mite feeding on leaves during hot and dry conditions.";
          possibleSolution =
              "Aiming a hard stream of water at infested plants to knock spider mites off the plants. Also use of insecticidal soaps, horticultural oils.";
          break;

        case "Tomato Target Spot":
          possibleCauses =
              "The fungus Corynespora cassiicola which spreads to plants.";
          possibleSolution =
              "Planting resistant varieties, keeping farms free from weeds.";
          break;

        case "Tomato Mosaic Virus":
          possibleCauses =
              "Spread by aphids and other insects, mites, fungi, nematodes, and contact; pollen and seeds can carry the infection as well.";
          possibleSolution =
              "No cure for infected plants, remove all infected plants and destroy them.";
          break;

        case "Tomato Yellow Leaf Curl Virus":
          possibleCauses =
              "Physically spread plant-to-plant by the silverleaf whitefly.";
          possibleSolution =
              "Chemical control: Imidacloprid should be sprayed on the entire plant and below the leaves.";
          break;

        default:
          possibleCauses = "N/A";
          possibleSolution = "N/A";
          break;
      }
    });
  }
}
