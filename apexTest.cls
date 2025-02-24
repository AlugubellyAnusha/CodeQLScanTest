Public Class abhiTestClass{
public static testMethod(){
String translationQuery = 'SELECT Id, Name, ' + String.join(allFormsFinalLanguageFields, ',') + 
                                      ' FROM Form_Translation__c WHERE Id IN(\'' + String.join( translationMapKeys, '\',\'') + '\')';
}
}
