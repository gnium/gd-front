import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Tabs from '../../components/Tabs/Tabs';
import PageHeader from '../../components/PageHeader/PageHeader';
import background from '../../assets/backgrounds/background.png'
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Button from '../../components/buttons/Button/Button';
import { themeColors } from '../../config';
import DynamicTable from '../../components/DynamicTable/DynamicTable';
import { ColumnDefinition } from '../../components/DynamicTable/DynamicTable.types';
import { useAuth } from '../../contexts/AuthContext';


type Role = {
    id: number;
    name: string;
    display_name: string;
    navigation_item_list: string[];
};

type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    company: string | null;
    deal_stage: string | null;
    publisher_id: number | null;
    profile_picture_url: string;
    roles: Role[];
};

const UserManagementPage = () => {
    const { t } = useTranslation();
    const { getToken } = useAuth();
    const [currentTab, setCurrentTab] = useState('all');
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [sortedUsers, setSortedUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formError, setFormError] = useState<string | null>(null);
    const [formSuccess, setFormSuccess] = useState<string | null>(null);

    const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
    const [sortState, setSortState] = useState<{ column: string; direction: 'asc' | 'desc' }>();

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        company: '',
        deal_stage: '',
        publisher_id: '',
        role: ''
    });

    const fetchUsers = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const token = getToken();
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/';
            const response = await axios.get(
                `${baseUrl}/users`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            // Ensure we have an array of users from the data property
            const usersData = Array.isArray(response.data?.data) ? response.data.data : [];
            
            setUsers(usersData);
            setSortedUsers(usersData);
        } catch (err) {
            setError('Failed to fetch users');
            console.error('Error fetching users:', err);
            setUsers([]);
            setSortedUsers([]);
        } finally {
            setIsLoading(false);
        }
    }, [getToken]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleRowSelect = (rowId: string | number, selected: boolean) => {
        if (selected) {
            setSelectedRows((prev) => [...prev, rowId]);
        } else {
            setSelectedRows((prev) => prev.filter((id) => id !== rowId));
        }
    };

    const handleSortChange = (columnName: string, direction: 'asc' | 'desc') => {
        setSortState({ column: columnName, direction });
        
        const newSortedUsers = [...users].sort((a, b) => {
            // Safely access the column values
            let valueA: string | number | null = '';
            let valueB: string | number | null = '';

            switch (columnName) {
                case 'name':
                    valueA = a.name;
                    valueB = b.name;
                    break;
                case 'email':
                    valueA = a.email;
                    valueB = b.email;
                    break;
                case 'publisher_id':
                    valueA = a.publisher_id;
                    valueB = b.publisher_id;
                    break;
                default:
                    return 0;
            }

            // Handle null/undefined values
            if (valueA === null || valueA === undefined) valueA = '';
            if (valueB === null || valueB === undefined) valueB = '';

            // Convert to lowercase for string comparison
            if (typeof valueA === 'string') valueA = valueA.toLowerCase();
            if (typeof valueB === 'string') valueB = valueB.toLowerCase();

            if (valueA < valueB) return direction === 'asc' ? -1 : 1;
            if (valueA > valueB) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortedUsers(newSortedUsers);
    };

    const getFilteredUsers = () => {
        if (!Array.isArray(sortedUsers)) return [];
        if (currentTab === 'all') return sortedUsers;
        return sortedUsers.filter(user => 
            user.roles?.some(role => role.name.toLowerCase() === currentTab.toLowerCase())
        );
    };

    const getRoleCount = (role: string) => {
        if (!Array.isArray(users)) return 0;
        if (role === 'all') return users.length;
        return users.filter(user => 
            user.roles?.some(r => r.name.toLowerCase() === role.toLowerCase())
        ).length;
    };

    const columns: ColumnDefinition[] = [
        {
            name: 'profile_picture_url',
            label: '',
            type: 'custom',
            config: { 
                sortable: false, 
                align: 'center', 
                width: 60,
                render: () => (
                    <div style={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
                                fill="#666"
                            />
                        </svg>
                    </div>
                )
            },
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            config: { 
                sortable: true,
                align: 'left'
            },
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            config: { 
                sortable: true,
                align: 'left'
            },
        },
        {
            name: 'roles',
            label: 'Roles',
            type: 'custom',
            config: { 
                sortable: false,
                render: (row: User) => {
                    if (!Array.isArray(row.roles)) return '-';
                    return row.roles.map(role => role.display_name || role.name).join(', ');
                }
            },
        },
        {
            name: 'publisher_id',
            label: 'Publisher ID',
            type: 'text',
            config: { 
                sortable: true,
                render: (row: User) => row.publisher_id?.toString() || '-'
            },
        },
    ];

    const tabs = [
        { name: "all", label: t("all") },
        { name: "admin", label: t("administrator") },
        { name: "referrer", label: t("referrer") },
        { name: "accountant", label: t("accountant") },
    ].map(tab => ({
        ...tab,
        count: getRoleCount(tab.name)
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError(null);
        setFormSuccess(null);

        try {
            const token = getToken();
            const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/';
            
            await axios.post(
                `${baseUrl}/users`,
                {
                    ...formData,
                    publisher_id: formData.publisher_id ? parseInt(formData.publisher_id) : null
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );

            setFormSuccess('User created successfully!');
            setShowAddUserForm(false);
            fetchUsers(); // Refresh the user list
        } catch (err: any) {
            setFormError(err.response?.data?.message || 'Failed to create user');
            console.error('Error creating user:', err);
        }
    };

    return (
        <div
            style={{
                width: '100%',
                maxWidth: 1000
            }}
        >
            <PageHeader
                backgroundImage={background}
                height={100}
                containerStyle={{
                    borderRadius: 20,
                    alignItems: 'flex-start',
                }}
                renderContent={() => {
                    return <div>
                        <TypingEffect
                            showCursor={false}
                            text={t("userManagement.title")}
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                            }}
                        />
                    </div>
                }}
            />
            <main style={{
                marginTop: 20,
                border: ".5px solid rgba(255,255,255,.5)",
                borderRadius: 20,
                padding: "20px 30px 40px 30px"
            }}>
                {!showAddUserForm && (<div style={{
                    padding: 10
                }}>
                    <Button
                        title={`+ ${t('userManagement.addUser')}`}
                        size='lg'
                        onClick={() => setShowAddUserForm(true)}
                    />
                </div>)}
                {!showAddUserForm && (
                    <>
                        <Tabs
                            tabs={tabs}
                            renderTab={(tab: any, isActive) => (
                                <div
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 5,
                                        padding: "0px 10px",
                                        cursor: "pointer",
                                        fontWeight: 600,
                                        fontSize: 14,
                                        color: isActive ? themeColors.primary : themeColors.textTint,
                                        borderRight: '1px solid #555',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <span>{tab.label}</span>
                                    <span style={{ opacity: 0.7 }}>({tab.count})</span>
                                </div>
                            )}
                            defaultActiveTab={currentTab}
                            onTabChange={(tab) => {
                                setCurrentTab(tab);
                            }}
                            showActiveTabIndicator={false}
                            containerStyle={{
                                marginTop: 10,
                                marginBottom: 10
                            }}
                            tabStyle={{
                                padding: 10
                            }}
                        />
                        <div style={{ padding: 20 }}>
                            <DynamicTable
                                data={getFilteredUsers()}
                                columns={columns}
                                selectableRows
                                selectedRows={selectedRows}
                                onRowSelect={handleRowSelect}
                                onSortChange={handleSortChange}
                                sortState={sortState}
                                showFooterHeader
                                containerStyle={{
                                    backgroundColor: '#111',
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                }}
                                tableStyle={{
                                    backgroundColor: '#111',
                                }}
                                theadStyle={{
                                    backgroundColor: '#222',
                                }}
                                headerCellStyle={{
                                    color: '#ccc',
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                }}
                                rowStyle={{
                                    borderBottom: '1px solid #333',
                                }}
                                cellStyle={{
                                    color: '#ccc',
                                    fontSize: 13,
                                }}
                                emptyMessage={error || "No users found."}
                                loading={isLoading}
                            />
                        </div>
                    </>
                )}
                {showAddUserForm && (
                    <div style={{ padding: 30 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                            <button
                                onClick={() => setShowAddUserForm(false)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    fontSize: 27,
                                    cursor: 'pointer',
                                    marginRight: 8,
                                    fontWeight: 900,
                                }}
                                aria-label="Back"
                            >
                                ←
                            </button>
                            <span style={{ fontWeight: 700, fontSize: 28, color: "#fff" }}>{t('userManagement.addUser')}</span>
                        </div>
                        <div style={{ color: '#aaa', fontSize: 15, marginBottom: 32 }}>
                            <span style={{ color: '#888' }}>{t('userManagement.title')}</span>
                            <span style={{ margin: '0 8px' }}>/</span>
                            <span style={{ color: '#fff' }}>{t('userManagement.addUser')}</span>
                        </div>
                        {formError && (
                            <div style={{ 
                                color: '#ff4444', 
                                backgroundColor: 'rgba(255, 68, 68, 0.1)', 
                                padding: '10px', 
                                borderRadius: '4px',
                                marginBottom: '20px'
                            }}>
                                {formError}
                            </div>
                        )}
                        {formSuccess && (
                            <div style={{ 
                                color: '#00CE8E', 
                                backgroundColor: 'rgba(0, 206, 142, 0.1)', 
                                padding: '10px', 
                                borderRadius: '4px',
                                marginBottom: '20px'
                            }}>
                                {formSuccess}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 24,
                            background: '#181818',
                            borderRadius: 12,
                            padding: 32,
                            color: '#fff',
                            marginBottom: 32
                        }}>
                            {/* Name */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1/2' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Name <span style={{ color: '#F05CD5' }}>*</span></label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            {/* Email */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '2/3' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Email <span style={{ color: '#F05CD5' }}>*</span></label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="example@site.com" 
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            {/* Publisher ID */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1/2' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Publisher ID</label>
                                <input 
                                    type="number" 
                                    name="publisher_id"
                                    value={formData.publisher_id}
                                    onChange={handleInputChange}
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            {/* Company */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '2/3' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Company</label>
                                <input 
                                    type="text" 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            {/* Deal Stage */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1/2' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Deal Stage</label>
                                <input 
                                    type="text" 
                                    name="deal_stage"
                                    value={formData.deal_stage}
                                    onChange={handleInputChange}
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            {/* Role */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '2/3' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Role <span style={{ color: '#F05CD5' }}>*</span></label>
                                <select 
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    required
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }}
                                >
                                    <option value="">Select a role</option>
                                    <option value="admin">Administrator</option>
                                    <option value="referrer">Referrer</option>
                                    <option value="accountant">Accountant</option>
                                </select>
                            </div>
                            {/* Password */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '1/2' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Password <span style={{ color: '#F05CD5' }}>*</span></label>
                                <input 
                                    type="password" 
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            {/* Password Confirmation */}
                            <div style={{ display: 'flex', flexDirection: 'column', gridColumn: '2/3' }}>
                                <label style={{ marginBottom: 8, fontWeight: 500 }}>Confirm Password <span style={{ color: '#F05CD5' }}>*</span></label>
                                <input 
                                    type="password" 
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleInputChange}
                                    required
                                    style={{ background: '#111', border: '1px solid #333', borderRadius: 8, padding: 12, color: '#fff', fontSize: 16 }} 
                                />
                            </div>
                            <div style={{ gridColumn: '1/-1', marginTop: 16 }}>
                                <button 
                                    type="submit" 
                                    style={{
                                        background: '#00CE8E',
                                        color: '#111',
                                        border: 'none',
                                        borderRadius: 16,
                                        padding: '14px 32px',
                                        fontWeight: 700,
                                        fontSize: 18,
                                        cursor: 'pointer',
                                    }}
                                >
                                    {t('userManagement.addUser')}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
};

export default UserManagementPage;