import { innerJoin } from '.'

describe("InnerJoin", () => {
  test("should return an array", () => {
    const mockContacts = [
      { id: 0, name: 'Maggie', phone: '+12345' },
      { id: 1, name: 'Kevin', phone: '+45623' },
      { id: 2, name: 'Aaron', phone: '+98765' },
    ];

    const mockDetails = [
      { id: 0, email: 'maggie@email.com' },
      { id: 2, email: 'aaron@email.com' },
    ];

    const expectedResult = [
        { id: 0, name: 'Maggie', phone: '+12345', email: 'maggie@email.com' },
        { id: 2, name: 'Aaron', phone: '+98765', email: 'aaron@email.com' },
      ];

    const actualResult = innerJoin({ leftArr: mockContacts, rightArr: mockDetails, key: 'id' });

    expect(actualResult).toEqual(expectedResult);
  });
});