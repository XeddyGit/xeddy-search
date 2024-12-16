interface MailerliteSubscriber {
  email: string;
  fields?: {
    name?: string;
    university?: string;
  };
  groups: string[];
  status: string;
}

export const addSubscriberToMailerlite = async (
  email: string, 
  firstName: string, 
  university: string
): Promise<boolean> => {
  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_MAILERLITE_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        fields: {
          name: firstName,
          university: university
        },
        groups: ['139710518580479742'],
        status: 'active'
      } as MailerliteSubscriber)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Mailerlite API Error: ${JSON.stringify(errorData)}`);
    }

    return true;

  } catch (error) {
    console.error('Error adding subscriber to Mailerlite:', error);
    return false;
  }
};
