"use client"
import { useState } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
} from '@mantine/core';
import { CiSearch } from "react-icons/ci";
import { teachersData } from '@/lib/lists/teachersData';

interface RowData {
    id: number;
    teacherId: string;
    name: string;
    avatar: string;
    email: string;
    phone: string;
    subjects: string[];
    classes: string[];
    address: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = CiSearch;
    return (
        <Table.Th>
            <UnstyledButton onClick={onSort}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center>
                        <Icon style={{ width: rem(16), height: rem(16) }} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        Object.keys(item).some((key) => {
            const value = item[key as keyof RowData];

            // Vérifier si le champ est un tableau (ex : subjects, classes)
            if (Array.isArray(value)) {
                return value.some((val) => val.toLowerCase().includes(query));
            }
            // Si c'est une chaîne de caractères, vérifier si elle correspond à la recherche
            if (typeof value === 'string') {
                return value.toLowerCase().includes(query);
            }
            // Si c'est autre chose, ignorer
            return false;
        })
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    const sorted = [...data].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        // Check if the values are strings, otherwise return a default comparison
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return payload.reversed
                ? bValue.localeCompare(aValue)
                : aValue.localeCompare(bValue);
        }
        return 0;
    });

    return filterData(sorted, payload.search);
}

export function TeacherForm() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(teachersData);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(teachersData, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(teachersData, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((row) => (
        <Table.Tr key={row.id}>
            <Table.Td className='flex items-center gap-2'>
                <img
                    src={row.avatar}
                    alt={`${row.name}'s avatar`}
                    className='object-cover'
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
                <div className='flex flex-col gap-0'>
                    <span className='text-base font-semibold'>{row.name}</span>
                    <span className='text-base text-slate-400'>{row.email}</span>
                </div>

            </Table.Td>
            <Table.Td>
                <span className='text-base'>{row.id} </span>
            </Table.Td>
            <Table.Td>
                <span className='text-base'>{row.subjects.join(' , ')}</span>
            </Table.Td>
            <Table.Td>
                <span className='text-base'>{row.classes.join(' , ')}</span>
            </Table.Td>
            <Table.Td>
                <span className='text-base'>{row.email}</span>
            </Table.Td>
            <Table.Td>
                <span className='text-base'>{row.address}</span>
            </Table.Td>
            <Table.Td>
                <Table.Td>
                    <span className='text-base'>{row.phone}</span>
                </Table.Td>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<CiSearch style={{ width: rem(16), height: rem(16) }} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Thead>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'name'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('name')}
                        >
                            Infos
                        </Th>
                        <Th
                            sorted={sortBy === 'id'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('id')}
                        >
                            ID
                        </Th>
                        <Th
                            sorted={sortBy === 'subjects'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('subjects')}
                        >
                            Subjects
                        </Th>
                        <Th
                            sorted={sortBy === 'classes'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('classes')}
                        >
                            Classes
                        </Th>
                        <Th
                            sorted={sortBy === 'email'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('email')}
                        >
                            Email
                        </Th>
                        <Th
                            sorted={sortBy === 'address'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('address')}
                        >
                            Adress
                        </Th>
                        <Th
                            sorted={sortBy === 'phone'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('phone')} // Sorting by phone instead of company
                        >
                            Phone
                        </Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={Object.keys(teachersData[0]).length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}
