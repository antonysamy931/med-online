
# coding: utf-8

# In[1]:


from bs4 import BeautifulSoup
import requests
import pandas as pd
import os


# In[2]:


BaseUrl = "http://www.medguideindia.com/npp_price_list.php?nav_link=&pageNum_rr={0}&nav_link=&selectme={1}"


# In[48]:


if os.path.isfile('MEDICINES_DRUGS.data'):
    os.remove('MEDICINES_DRUGS.data')

with open("MEDICINES_DRUGS.data","a+") as file:
    file.write("Name,Quantity,Type,PackageUnit,PricePerUnit\n")
    for i in range(41):    
        DrugPage = requests.get(BaseUrl.format(i,i))
        soup = BeautifulSoup(DrugPage.content,"html.parser")
        table = soup.find(class_='tabsborder2')

        for i, tr in enumerate(table.findAll('tr')):
            if i != 0:
                td = tr.findAll('td')
                if len(td) > 1 and len(td) == 6:
                    genericQuantity = td[1]       
                    text = genericQuantity.get_text()
                    Name = text.split(':')[0].strip()
                    Quantity = text.split(':')[1].strip()        
                    Type = td[2].get_text().strip()
                    Package_Unit = td[3].get_text()
                    Price_Per_Unit = td[4].get_text()
                    file.write(Name+','+Quantity+','+Type+','+Package_Unit+','+Price_Per_Unit+'\n')                    


# In[63]:


Data = pd.read_csv('MEDICINES_DRUGS.data')
Medicines = pd.DataFrame(Data)
Medicines.groupby(['Type']).median().index.get_level_values(0).tolist()

