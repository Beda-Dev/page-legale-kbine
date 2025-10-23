import type { Metadata } from "next"
import { Shield, Lock, FileText, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Informations légales et confidentialité | Kbine",
  description: "Mentions légales, politique de confidentialité et conditions d'utilisation de Kbine",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F2] to-[#F0F9FF]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#FF6B35] to-[#FF8555] text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Kbine
            </h1>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-balance">
              Informations légales et confidentialité
            </h1>
            <p className="text-lg text-white/90 text-pretty">Transparence et protection de vos données personnelles</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Quick Navigation */}
          <Card className="border-[#FF6B35]/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#FF6B35]">Navigation rapide</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="#mentions-legales"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#FF6B35]/5 to-[#FF6B35]/10 hover:from-[#FF6B35]/10 hover:to-[#FF6B35]/20 transition-all border border-[#FF6B35]/20"
                >
                  <FileText className="w-5 h-5 text-[#FF6B35]" />
                  <span className="font-medium text-foreground">Mentions légales</span>
                </a>
                <a
                  href="#confidentialite"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#2E86AB]/5 to-[#2E86AB]/10 hover:from-[#2E86AB]/10 hover:to-[#2E86AB]/20 transition-all border border-[#2E86AB]/20"
                >
                  <Lock className="w-5 h-5 text-[#2E86AB]" />
                  <span className="font-medium text-foreground">Confidentialité</span>
                </a>
                <a
                  href="#conditions"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-[#4CAF50]/5 to-[#4CAF50]/10 hover:from-[#4CAF50]/10 hover:to-[#4CAF50]/20 transition-all border border-[#4CAF50]/20"
                >
                  <Shield className="w-5 h-5 text-[#4CAF50]" />
                  <span className="font-medium text-foreground">Conditions d'utilisation</span>
                </a>
              </nav>
            </CardContent>
          </Card>

          {/* Mentions Légales */}
          <section id="mentions-legales">
            <Card className="border-[#FF6B35]/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8555] flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#FF6B35]">Mentions légales</CardTitle>
                </div>
                <CardDescription>Informations sur l'éditeur de l'application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Éditeur de l'application</h3>
                  <div className="space-y-2 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Nom :</strong> DIGIFAZ
                    </p>
                    <p>
                      <strong className="text-foreground">Siège social :</strong>  Abidjan , Cocody quartier Akouédo Attié
                    </p>
                  </div>
                </div>

                <Separator className="bg-[#FF6B35]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Directeur de la publication</h3>
                  <p className="text-muted-foreground leading-relaxed">Kla Alexandre</p>
                </div>

                <Separator className="bg-[#FF6B35]/20" />


                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5 text-[#FF6B35]" />
                      <span>contact@kbine.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5 text-[#FF6B35]" />
                      <span>+225 07 89 06 20 79</span>
                    </div>
                    {/* <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-[#FF6B35] mt-0.5" />
                      <span>[Adresse complète]</span>
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Politique de Confidentialité */}
          <section id="confidentialite">
            <Card className="border-[#2E86AB]/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2E86AB] to-[#4AA5C9] flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#2E86AB]">Politique de confidentialité</CardTitle>
                </div>
                <CardDescription>Comment nous collectons et protégeons vos données</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">1. Collecte des données</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Kbine collecte les données personnelles suivantes dans le cadre de l'utilisation de l'application :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>
                      <strong className="text-foreground">Numéro de téléphone :</strong> utilisé pour l'authentification
                      et l'identification de votre opérateur
                    </li>
                    <li>
                      <strong className="text-foreground">Historique des transactions :</strong> pour le suivi de vos
                      achats de crédits et forfaits
                    </li>
                    <li>
                      <strong className="text-foreground">Données de paiement :</strong> informations nécessaires au
                      traitement sécurisé des paiements
                    </li>

                  </ul>
                </div>

                <Separator className="bg-[#2E86AB]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">2. Utilisation des données</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Vos données personnelles sont utilisées pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>Traiter vos commandes de crédits et forfaits téléphoniques</li>
                    <li>Authentifier votre compte et sécuriser l'accès à l'application</li>
                    <li>Détecter automatiquement votre opérateur téléphonique</li>
                    <li>Vous envoyer des notifications sur le statut de vos transactions</li>
                    <li>Améliorer nos services et l'expérience utilisateur</li>
                    <li>Respecter nos obligations légales et réglementaires</li>
                  </ul>
                </div>

                <Separator className="bg-[#2E86AB]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">3. Protection des données</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos
                    données :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>Authentification sécurisée par numéro de téléphone</li>
                    <li>Accès restreint aux données personnelles (équipe autorisée uniquement)</li>
                    <li>Surveillance et détection des activités suspectes</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                  </ul>
                </div>

                <Separator className="bg-[#2E86AB]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">4. Partage des données</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Vos données peuvent être partagées avec :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>
                      <strong className="text-foreground">Opérateurs téléphoniques :</strong> pour le traitement des
                      recharges et forfaits
                    </li>
                    <li>
                      <strong className="text-foreground">Prestataires de paiement :</strong> pour le traitement
                      sécurisé des transactions
                    </li>
                    <li>
                      <strong className="text-foreground">Autorités légales :</strong> en cas d'obligation légale ou de
                      demande judiciaire
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Nous ne vendons jamais vos données personnelles à des tiers.
                  </p>
                </div>

                <Separator className="bg-[#2E86AB]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">5. Vos droits</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Conformément à la réglementation en vigueur, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>
                      <strong className="text-foreground">Droit d'accès :</strong> consulter les données que nous
                      détenons sur vous
                    </li>
                    <li>
                      <strong className="text-foreground">Droit de rectification :</strong> corriger vos données
                      inexactes
                    </li>
                    <li>
                      <strong className="text-foreground">Droit à l'effacement :</strong> demander la suppression de vos
                      données
                    </li>
                    <li>
                      <strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de
                      vos données
                    </li>
                    <li>
                      <strong className="text-foreground">Droit à la portabilité :</strong> récupérer vos données dans
                      un format structuré
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Pour exercer ces droits, contactez-nous à :{" "}
                    <span className="text-[#2E86AB] font-medium">privacy@kbine.com</span>
                  </p>
                </div>

                <Separator className="bg-[#2E86AB]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">6. Conservation des données</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles
                    elles ont été collectées, et conformément aux obligations légales de conservation (généralement 5
                    ans pour les données de transaction).
                  </p>
                </div>

                <Separator className="bg-[#2E86AB]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">7. Cookies et technologies similaires</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    L'application Kbine utilise des technologies de suivi pour améliorer l'expérience utilisateur et
                    analyser l'utilisation de l'application. Vous pouvez gérer vos préférences dans les paramètres de
                    l'application.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conditions d'utilisation */}
          <section id="conditions">
            <Card className="border-[#4CAF50]/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#4CAF50]">Conditions d'utilisation</CardTitle>
                </div>
                <CardDescription>Règles d'utilisation de l'application Kbine</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">1. Objet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de l'application
                    mobile Kbine, qui permet l'achat de crédits de communication et la souscription à différents
                    forfaits téléphoniques en ligne.
                  </p>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">2. Inscription et compte utilisateur</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Pour utiliser Kbine, vous devez :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>Créer un compte en fournissant un numéro de téléphone valide</li>
                    <li>Être majeur ou avoir l'autorisation d'un représentant légal</li>
                    <li>Fournir des informations exactes et à jour</li>
                    <li>Maintenir la confidentialité de vos identifiants de connexion</li>
                    <li>Être responsable de toutes les activités effectuées depuis votre compte</li>
                  </ul>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">3. Services proposés</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">Kbine propose les services suivants :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>Achat de crédits de communication pour tous les opérateurs</li>
                    <li>Souscription à des forfaits d'appel et internet</li>
                    <li>Détection automatique de l'opérateur du numéro saisi</li>
                    <li>Historique des transactions</li>
                    <li>Notifications de statut des commandes</li>
                  </ul>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">4. Commandes et paiements</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Processus de commande :</strong> Après sélection de l'offre et
                      validation du paiement, votre commande est traitée manuellement par notre équipe via des
                      opérations USSD auprès de l'opérateur concerné.
                    </p>
                    <p>
                      <strong className="text-foreground">Délai de traitement :</strong> Les commandes sont généralement
                      traitées en temps réel, mais peuvent prendre jusqu'à 24 heures en cas de forte affluence.
                    </p>
                    <p>
                      <strong className="text-foreground">Paiement :</strong> Les paiements sont sécurisés et traités
                      par nos prestataires de paiement certifiés. Toutes les transactions sont soumises à vérification
                      anti-fraude.
                    </p>
                    <p>
                      <strong className="text-foreground">Confirmation :</strong> Vous recevrez une notification
                      confirmant le statut de votre commande (en cours, validée, ou échouée).
                    </p>
                  </div>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                {/* <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">5. Remboursements et réclamations</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      En cas de problème avec votre commande (crédit non reçu, erreur de montant, etc.), vous disposez
                      d'un délai de 48 heures pour nous contacter via l'application ou par email.
                    </p>
                    <p>
                      Les remboursements sont traités dans un délai de 5 à 10 jours ouvrables après vérification de la
                      réclamation.
                    </p>
                  </div>
                </div>

                <Separator className="bg-[#4CAF50]/20" /> */}

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">5. Obligations de l'utilisateur</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    En utilisant Kbine, vous vous engagez à :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                    <li>Ne pas utiliser l'application à des fins illégales ou frauduleuses</li>
                    <li>Ne pas tenter de contourner les mesures de sécurité</li>
                    <li>Ne pas perturber le fonctionnement de l'application</li>
                    <li>Respecter les droits de propriété intellectuelle de Kbine</li>
                    <li>Fournir des informations exactes lors de vos transactions</li>
                  </ul>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">6. Responsabilité</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Kbine s'efforce d'assurer la disponibilité et la fiabilité de l'application, mais ne peut garantir
                      un fonctionnement ininterrompu en raison de contraintes techniques ou de maintenance.
                    </p>
                    <p>
                      Kbine ne peut être tenu responsable des dysfonctionnements imputables aux opérateurs téléphoniques
                      ou aux prestataires de paiement tiers.
                    </p>
                  </div>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">7. Modification des CGU</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kbine se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront
                    informés des modifications par notification dans l'application. La poursuite de l'utilisation de
                    l'application après modification vaut acceptation des nouvelles conditions.
                  </p>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">8. Résiliation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application. Kbine se
                    réserve le droit de suspendre ou supprimer un compte en cas de violation des présentes CGU.
                  </p>
                </div>

                <Separator className="bg-[#4CAF50]/20" />

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">10. Droit applicable et juridiction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Les présentes CGU sont régies par le droit Côte d'Ivoire/Abidjan. Tout litige relatif à l'utilisation de
                    l'application sera soumis à la compétence exclusive des tribunaux d'Abidjan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Footer */}
          <Card className="border-[#FF6B35]/20 shadow-lg bg-gradient-to-br from-[#FF6B35]/5 to-[#2E86AB]/5">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Des questions ?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant la protection de
                  vos données et l'utilisation de Kbine.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                  <a
                    href="mailto:contact@kbine.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8555] text-white rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    Nous contacter
                  </a>
                  <a
                    href="tel:+2250789062079"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2E86AB] to-[#4AA5C9] text-white rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    Appeler le support
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Last Update */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
