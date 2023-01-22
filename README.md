## Admin Portal

![image](https://user-images.githubusercontent.com/42933956/213926619-ad871946-4058-4f57-a178-c5709663be34.png)

Das ist die Home/Startseite. Das ist die einzige Seite die ohne eingeloggten User erreichbar ist.


![image](https://user-images.githubusercontent.com/42933956/213926698-3d8df199-b543-4b82-8814-8673052a201b.png)

Es wurde ein lokaler Keycloak eingesetzt. Dieser ist konfiguriert, dass es möglich ist neue Nutzer zu erstellen. Die ID des eingeloggten Users wird als AppKey verwendet.

![image](https://user-images.githubusercontent.com/42933956/213926765-387e0cb7-d0c1-4468-bf72-cca240b28522.png)

### Your Shop

![image](https://user-images.githubusercontent.com/42933956/213926798-1a93825a-c0e9-4dbb-b92b-5ad3bdc815ff.png)

Wenn noch kein Shop erstellt wurde, sieht das Formular so aus.

![image](https://user-images.githubusercontent.com/42933956/213926822-f90f95c6-63ce-49f2-b53d-18bdaaebeeec.png)

Nach dem Erstellen eines Shops. Wird dieser Screen angezeigt. Mit dem Button "Generate Config" lässt sich die environment.ts File die für das einbinden in den eigenen Shop nötig ist, herunterladen.

### Products, Customers and Coupons

![image](https://user-images.githubusercontent.com/42933956/213926909-6f37f7c2-057a-41d9-a3fb-a76548828f48.png)

Products, Customers und Coupons werden über eine ident aufgebaute RestApi manipuliert. Dies ermöglichte mir, dass alle 3 Seiten durch eine ItemList verwaltet werden und so keine Codeverdopplung nötig war. Die Felder zum Erstellen von neuen Einträgen werden mittels Reflection geladen.

![image](https://user-images.githubusercontent.com/42933956/213927000-e087ff63-864a-4efa-aeea-412fb039592a.png)

Das Aussehen eines Eintrags wird mittels 3 an die Itemlist zu übergebenden Callbacks erstellt.

![image](https://user-images.githubusercontent.com/42933956/213927055-34e42a9a-78f0-4845-9898-67c117d7b833.png)
![image](https://user-images.githubusercontent.com/42933956/213927072-5a525d53-b4c1-462c-879c-280829ff8cd2.png)

### Statistics

![image](https://user-images.githubusercontent.com/42933956/213927116-2f020095-14e7-4fc9-a79b-434e298ec9f5.png)

Statistiken werden auf diesem Bildschirm angezeigt.

## Tailwind Shop

![image](https://user-images.githubusercontent.com/42933956/213927180-867a571f-d6fe-4ac4-b5cd-5841e61ec20b.png)

Startseite des Tailwind Shops.

### Userpages

![image](https://user-images.githubusercontent.com/42933956/213927222-4fd750bb-1a37-418f-9c7c-e6cfc5b5cbfa.png)

Sign Up Screen mit diversen Validiation Errors.

![image](https://user-images.githubusercontent.com/42933956/213927245-44bc731d-b358-4e53-b33a-f1795acc3483.png)

Login Form mittels Customer Id.

![image](https://user-images.githubusercontent.com/42933956/213927261-2d27cc58-5c43-491f-ae08-7cf79d2faf3b.png)

Profilepage.

### Products

![image](https://user-images.githubusercontent.com/42933956/213927279-ded65ab1-7eaf-43ff-87aa-37f48d7dff9a.png)

Produktliste mit Suchleiste.

![image](https://user-images.githubusercontent.com/42933956/213927305-1f76aea0-7069-4d4a-9932-ce14e18d9320.png)

Detailseite eines Produkts.

### Cart

![image](https://user-images.githubusercontent.com/42933956/213927325-f01330d5-1167-4ab8-9ff0-ba9b2f1de10e.png)

Anzeige des Warenkorbs mit einem Produkt.

![image](https://user-images.githubusercontent.com/42933956/213927346-f6568cc8-e529-4b10-b5cf-17214260c551.png)

Anzeige mit mehreren Produkten.

### Orders

![image](https://user-images.githubusercontent.com/42933956/213927366-6a4189d8-4d9e-49d0-8e81-b9797d0c4a3d.png)

Checkout Ansicht ohne aktivierte Coupons.

![image](https://user-images.githubusercontent.com/42933956/213927397-e6650488-8f07-4f9e-92f7-3efbb85c58b6.png)

Mit einem aktivierten Coupon.

![image](https://user-images.githubusercontent.com/42933956/213927420-46fc1eab-9d67-46d3-aa62-ae945f4c2bda.png)

Nach dem Kauf wird man auf die Orderseite weitergeleitet.

## Bootstrap Shop

Die Funktionalität des 2. Shops ist ident mit dem 1. . Alle Unterschiede sind visueller Art, weil der 1. Shop mit Tailwind CSS gestyled wurde und der 2. Shop mit Hilfe von Bootstrap. 

![image](https://user-images.githubusercontent.com/42933956/213927604-7034cbf8-0c2f-4245-b2f3-e2c0b54537ba.png)
![image](https://user-images.githubusercontent.com/42933956/213927615-526e7eaf-0919-4a5e-b991-137368bc0f5a.png)
![image](https://user-images.githubusercontent.com/42933956/213927627-09884529-14a3-46fe-a3eb-b5161ce0cfd6.png)
![image](https://user-images.githubusercontent.com/42933956/213927638-63d0be45-12f0-4058-8849-d25c30b8abce.png)
![image](https://user-images.githubusercontent.com/42933956/213927645-c4de6113-df27-4f1d-a3aa-47d576e556da.png)
![image](https://user-images.githubusercontent.com/42933956/213927659-efc5d7ff-0b06-4532-9d63-04df6462d396.png)
![image](https://user-images.githubusercontent.com/42933956/213927667-d5ac9f59-9490-45fd-87aa-e143b6014f55.png)
![image](https://user-images.githubusercontent.com/42933956/213927676-5db27c4f-cf76-4c7f-b83e-f013ef903954.png)
![image](https://user-images.githubusercontent.com/42933956/213927685-12fae37d-629d-4abe-bdfd-8fa9bfbc6735.png)
![image](https://user-images.githubusercontent.com/42933956/213927698-4af13882-ef68-4eb7-84d9-5e9c2f75f741.png)
![image](https://user-images.githubusercontent.com/42933956/213927711-3cfc12d6-94c5-4414-82aa-f44dac8f1adf.png)

