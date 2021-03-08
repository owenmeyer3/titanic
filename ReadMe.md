# Background
Shortly before midnight on April 14, 1912, on her first Trans-Atlantic Voyage from Southampton, UK to New York, NY, the Royal Mail Ship (RMS) Titanic struck an iceberg setting in motion one of the greatest tragedies in history. Shortly after 2 A.M  (less than 3 hours later) on the morning of 15 April 1912, the Titanic sank beneath the waves taking with it almost two-thirds of the passengers and crew (more than 1500 lives lost). Analysis of this tragic accident has generated many theories and hoaxes but has led to an amazing collection of information and imagery of the famous ship and its passengers. This analysis seeks to explore the idea that passenger survival of this tragedy can be predicted based on demographic (age, gender, ticket (social) class) data.

# Overview

## Machine Learning
Machine learning models were generated to evalauate the possibility of successfully predicting the survival of individuals on the boat based on data associated with individuals. Training data was assembled for passengers with a known life/death outcome. Testing was done with passengers who did not have a known life/death outcome.

Three model types were evaluated for accuracy with the training data. The neural net model produced the best results and was chosen to predict the results for the survival data. Model accuracies are listed below (as a percentage of correctly predicted training data results):
* Neural net model (NN): 76%
* Logistic regression model (LR): 74%
* Support vector machine model (SVM): 72%

Feature importance was evaluated for all 3 models to eliminate excess computation involved in training models on features irrelevant to our result. Feature importance modeling showed that all features were significant for this model, and no features should be removed to optimize the model for speed.

While building the LR and SVM models, hyperparameter tuning as used to find the best model parameters to use for our results. These parameters were used in the above percentages.

## Tableau Visualizations
Using Tableau prep tool, the data was cleansed and re-shaped.  This was export to hyper files. Using Tableau Desktop, the hyper files were used to create worksheets of maps, charts and graphs.  These worksheets were used to create the final dashboards. Individual calculations were used inside of Tableau Desktop.  The Prep file and the Tableau workbook(twbx) file is in the repository
