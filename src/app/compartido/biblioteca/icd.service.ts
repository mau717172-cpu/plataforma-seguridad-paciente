import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, switchMap, catchError, throwError } from 'rxjs';

// Servicio para consumir la API de ICD-11 de la OMS
@Injectable({
  providedIn: 'root'
})
export class IcdService {
  // URL base de la API de ICD-11 MMS
  private apiUrl = 'https://id.who.int/icd/release/11/mms';
  // URL para obtener token
  private tokenUrl = 'https://icdaccessmanagement.who.int/connect/token';

  // Credenciales proporcionadas (comentadas para demo con datos mock)
  // private clientId = '49e8b02d-d770-47ae-9897-4577817aee94_5f3e8cf6-e210-4729-85c2-a7ab225570b2';
  // private clientSecret = 'ipgSg2a0qSV15JTts4tnGvxpdWwiAjvBvi2MiS0yuW4=';

  constructor(private http: HttpClient) { }

  // Método para obtener los códigos ICD-11
  // Usando datos mockeados para demo ya que la API real requiere configuración adicional
  getCodes(): Observable<any> {
    // Datos mockeados simulando respuesta de ICD-11
    const mockData = {
      "@context": "https://id.who.int/icd/contexts/context.jsonld",
      "@id": "http://id.who.int/icd/release/11/mms",
      "title": {
        "@language": "en",
        "@value": "ICD-11 MMS - Demo Data"
      },
      "child": [
        {
          "@id": "http://id.who.int/icd/release/11/mms/01",
          "title": {
            "@language": "en",
            "@value": "Certain infectious or parasitic diseases"
          },
          "classKind": "chapter",
          "child": [
            {
              "@id": "http://id.who.int/icd/release/11/mms/1A00",
              "title": {
                "@language": "en",
                "@value": "Cholera"
              },
              "classKind": "category"
            },
            {
              "@id": "http://id.who.int/icd/release/11/mms/1A01",
              "title": {
                "@language": "en",
                "@value": "Typhoid and paratyphoid fevers"
              },
              "classKind": "category"
            }
          ]
        },
        {
          "@id": "http://id.who.int/icd/release/11/mms/02",
          "title": {
            "@language": "en",
            "@value": "Neoplasms"
          },
          "classKind": "chapter",
          "child": [
            {
              "@id": "http://id.who.int/icd/release/11/mms/2A00",
              "title": {
                "@language": "en",
                "@value": "Malignant neoplasms of lip, oral cavity or pharynx"
              },
              "classKind": "category"
            }
          ]
        },
        {
          "@id": "http://id.who.int/icd/release/11/mms/03",
          "title": {
            "@language": "en",
            "@value": "Diseases of the blood or blood-forming organs"
          },
          "classKind": "chapter",
          "child": [
            {
              "@id": "http://id.who.int/icd/release/11/mms/3A00",
              "title": {
                "@language": "en",
                "@value": "Anaemias"
              },
              "classKind": "category"
            }
          ]
        },
        {
          "@id": "http://id.who.int/icd/release/11/mms/04",
          "title": {
            "@language": "en",
            "@value": "Diseases of the immune system"
          },
          "classKind": "chapter"
        },
        {
          "@id": "http://id.who.int/icd/release/11/mms/05",
          "title": {
            "@language": "en",
            "@value": "Endocrine, nutritional or metabolic diseases"
          },
          "classKind": "chapter",
          "child": [
            {
              "@id": "http://id.who.int/icd/release/11/mms/5A00",
              "title": {
                "@language": "en",
                "@value": "Diabetes mellitus"
              },
              "classKind": "category"
            }
          ]
        }
      ],
      "releaseDate": "2022-01-01",
      "version": "11"
    };

    // Retornar datos mockeados inmediatamente
    return of(mockData);

    // Código comentado para implementación real con API (requiere configuración CORS/backend):
    /*
    return this.getAccessToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'API-Version': 'v2'
        });
        return this.http.get(this.apiUrl, { headers });
      }),
      catchError(error => {
        console.error('Error al obtener códigos ICD:', error);
        return throwError(() => new Error('Error al cargar los códigos ICD. Verifica las credenciales.'));
      })
    );
    */
  }

  // Método comentado para obtener token (no usado en demo)
  /*
  private getAccessToken(): Observable<string> {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
      .set('scope', 'icdapi_access');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(this.tokenUrl, body.toString(), { headers }).pipe(
      switchMap(response => {
        if (response.access_token) {
          return [response.access_token];
        } else {
          throw new Error('No se pudo obtener el token de acceso');
        }
      }),
      catchError(error => {
        console.error('Error al obtener token:', error);
        return throwError(() => new Error('Error de autenticación con la API de ICD-11'));
      })
    );
  }
  */
}
